import P5 from 'p5'
import { instantiatedChords } from './instantiated-chords'
import { instantiatedCircle } from './instantiated-circle'

new P5(function (p) {
  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight)

    // Initiate canvas dimensions
    window.addEventListener('resize', () => {
      const width = window.innerWidth
      const height = window.innerHeight
      p.resizeCanvas(width, height)
    })
  }

  p.draw = function () {
    p.background('black')

    instantiatedCircle.draw(p)
    instantiatedChords.forEach((c) => c.draw(p))
  }
})
