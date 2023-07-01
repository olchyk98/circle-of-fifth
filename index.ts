import EasyMIDI from 'easymidi'
import { NoteMatcher } from './src/note-matcher'

// TODO: Implement input selection

// EasyMIDI.getInputs()
const InputName = 'Launchkey MK3 37 LKMK3 MIDI Out'

async function main () {
  const input = new EasyMIDI.Input(InputName)
  const matcher = new NoteMatcher()

  input.on('noteon', (playedSpec) => {
    const { note, velocity } = playedSpec

    if (velocity > 0) {
      matcher.recordNote(note)
    }
  })
}

main()
