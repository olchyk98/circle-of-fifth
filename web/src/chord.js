import { Circle } from './circle'

export class Chord {
  constructor ({ chord, angle, placement }) {
    this.chord = chord
    this.angle = angle
    this.placement = placement
  }

  draw (p) {
    const { angle: _angle, placement } = this
    const { stroke: circleStroke, d: circleD } = Circle
    const space = placement === 'outer'
      ? (40 + circleStroke)
      : (-40 - circleStroke)
    const size = placement === 'outer' ? 60 : 30
    // PI*1.5 - starts at the top of the circle
    // Converting degrees into radiants
    const angle = p.PI*1.5 + _angle * p.PI/180

    p.fill('white')
    p.textSize(size)
    p.textAlign(p.CENTER, p.CENTER)
    p.strokeWeight(0)
    p.text(
      this.chord,
      (circleD / 2 + space) * p.cos(angle) + p.width / 2,
      (circleD / 2 + space) * p.sin(angle) + p.height / 2,
    )
  }
}
