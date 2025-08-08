import { CHALLENGE_REFRESH_DURATION, MIDIManager } from './midi-manager'

export class Circle {
  static d = 500
  static stroke = 20

  static getColor () {
    const { playingChord, currentChallenge: challenge } = MIDIManager
    if (playingChord == null || challenge == null) return 'white'
    const correct = challenge.triadName === playingChord
    return correct ? 'lime' : 'red'
  }

  static draw (p) {
    p.strokeWeight(Circle.stroke)
    p.stroke(this.getColor())
    p.fill('black')
    p.ellipseMode(p.CENTER)
    const x = p.width / 2
    const y = p.height / 2
    if (MIDIManager.challengePendingSince == null) {
      p.circle(x, y, Circle.d)
    } else {
      const pendingTime = Date.now() - MIDIManager.challengePendingSince
      const progress = 1.99 * (pendingTime / CHALLENGE_REFRESH_DURATION)
      p.arc(x, y, Circle.d, Circle.d, -p.PI / 2, -p.PI / 2 + p.PI * progress)

    }
    return this
  }
}
