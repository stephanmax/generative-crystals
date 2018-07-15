export function polygon(n, x, y, r, angleOffset = 0) {
  const angle = 360 / n
  beginShape()
  for (let i = 0; i < n; i++) {
    var nextX = x + cos(i * angle + angleOffset) * r
    var nextY = y + sin(i * angle + angleOffset) * r
    vertex(nextX, nextY)
  }
  endShape(CLOSE)
}
