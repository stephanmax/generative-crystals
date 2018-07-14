class Ring extends Layer {
  
  constructor() {
    super()

    this.numShapes = this.sides
    this.angle = 360 / this.numShapes

    this.fillColor = random([this.color, color(0, 0, 0, 0)])
    this.randomShape = random([1, 2, 3])

    this.steps = floor(random(1, this.numSteps))
    this.posX = this.steps * this.stepLength
    this.size = floor(random(1, min(this.numSteps - this.steps, abs(0 - this.steps)))) * this.stepLength
    
    this.angleOffset = random([0, 60])
  }

  render() {
    fill(this.fillColor)
    stroke(this.color)
    strokeWeight(this.strokeWeight)

    push()

    translate(width / 2, height / 2)

    for (let i = 0; i < this.numShapes; i++) {
      switch (this.randomShape) {
        case 1:
          rect(this.posX, 0, this.size, this.size)
          break
        
        case 2:
          ellipse(this.posX, 0, this.size, this.size)
          break
        
        case 3:
          polygon(3, this.posX, 0, this.size, this.angleOffset)
          break
      
        default:
      }

      rotate(this.angle)
    }

    pop()
  }

}
