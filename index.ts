import EasyMIDI from 'easymidi'
import inquirer from 'inquirer'
import { NoteMatcher } from './src/note-matcher'

async function getInput (): Promise<EasyMIDI.Input> {
  const availableInputs = EasyMIDI.getInputs()
  const { input } = await inquirer.prompt<Record<'input', string>>({
    type: 'list',
    name: 'input',
    message: 'Select your MIDI interface',
    choices: availableInputs,
  })
  return new EasyMIDI.Input(input)
}

async function main () {
  const input = await getInput()
  const matcher = new NoteMatcher()

  input.on('noteon', (playedSpec) => {
    const { note, velocity } = playedSpec

    if (velocity > 0) {
      matcher.recordNote(note)
    }
  })
}

main()
