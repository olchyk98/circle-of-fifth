export class Circle {
  static d = 500
  static stroke = 20

  draw (p) {
    p.strokeWeight(Circle.stroke)
    p.stroke('white')
    p.fill('black')
    p.ellipseMode(p.CENTER)
    p.circle(p.width / 2, p.height / 2, Circle.d)
  }
}
