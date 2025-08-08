import P5 from 'p5'
import { Circle } from './circle'
import { instantiatedChords } from './instantiated-chords'
import { MIDIInfo } from './midi-info'
import { MIDIManager } from './midi-manager'

new P5(function (p) {
  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight)
    MIDIManager.setup()
    MIDIInfo.setup(p)

    // Initiate canvas dimensions
    window.addEventListener('resize', () => {
      const width = window.innerWidth
      const height = window.innerHeight
      p.resizeCanvas(width, height)
    })
  }

  p.draw = function () {
    if (!MIDIManager.initialized) return

    p.background('black')

    Circle.draw(p)
    MIDIInfo.draw(p, MIDIManager.midiInput.name)
    instantiatedChords.forEach((i) => i.draw(p))
  }
})
