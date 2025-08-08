import { MIDIManager } from './midi-manager'

export class MIDIInfo {
  modeButton = null

  static setup (p) {
    // Challenge or no challenge
    this.modeButton = p.createButton('Chill')
    this.modeButton.position(10, 10)
    this.modeButton.mousePressed(() => {
      if (MIDIManager.currentChallenge == null) {
        MIDIManager.randomizeChallenge()
      } else {
        MIDIManager.disableChallenge()
      }
    })

    // Reset MIDI
    const resetMIDIButton = p.createButton('Reset MIDI')
    resetMIDIButton.position(10, 40)
    resetMIDIButton.mousePressed(() => {
      window._resetPresavedInput()
      window.location.reload()
    })
  }

  static draw (p, name) {
    // MIDI Input info
    p.fill('white')
    p.textSize(10)
    p.textAlign(p.RIGHT, p.TOP)
    p.strokeWeight(0)
    p.text(name, p.width - 10, 10)

    // Button to enable/disable challenges
    this.modeButton.elt.textContent = MIDIManager.currentChallenge == null
      ? 'Challenge Me'
      : 'Practice Mode'

    return this
  }
}
