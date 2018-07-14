class Center extends Layer {
  
  constructor() {
    super()

    this.numShapes = this.sides
    this.angle = 360 / this.numShapes

    this.randomShape = random([1, 2, 3])
    this.size = floor(random(this.numSteps / 2, this.numSteps - 2)) * this.stepLength
  }

  render() {
    noStroke()
    fill(this.color)

    push()

    switch (this.randomShape) {
      case 1:
        rect(0, 0, this.size / 2, this.size / 2)
        break
      
      case 2:
        ellipse(0, 0, this.size, this.size)
        break
      
      case 3:
        polygon(6, 0, 0, this.size, 30)
        break
    
      default:
    }

    pop()
  }

}
