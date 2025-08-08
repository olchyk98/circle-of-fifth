import { WebMidi } from 'webmidi'

const lcKey = 'midi::indexPreference'

function getPresavedInput (midiInputs) {
  const presavedIndex = Number(window.localStorage.getItem(lcKey) ?? void 0) - 1
  if (midiInputs[Number(presavedIndex)] == null) {
    window.localStorage.removeItem(lcKey)
    return null
  }
  return midiInputs[presavedIndex]
}

export async function getMIDIInput () {
  await WebMidi.enable()
  const midiInputs = WebMidi.inputs
  if (midiInputs.length <= 0) {
    alert('Could not find any connected MIDI inputs. Please, connect one and try again.')
    throw new Error('0 MIDI Inputs')
  }
  const presavedInput = getPresavedInput(midiInputs)
  if (presavedInput != null) return presavedInput
  const userInput = prompt(
    [
      'Select your MIDI device:',
      ...midiInputs.map((input, index) => (
        `${index + 1} - ${input.name}`
      )),
    ].join('\n'),
  )
  const userSelectedIndex = Number(userInput) - 1
  if (midiInputs[userSelectedIndex] == null) {
    alert('Invalid index selected')
    return getMIDIInput(...arguments)
  } else {
    window.localStorage.setItem(lcKey, userInput)
    return midiInputs[userSelectedIndex]
  }
}

window._resetPresavedInput = function () {
  window.localStorage.removeItem(lcKey)
}
