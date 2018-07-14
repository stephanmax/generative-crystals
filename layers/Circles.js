class Circles extends Layer {
  
  constructor() {
    super()

    this.numShapes = this.sides
    this.angle = 360 / this.numShapes

    this.shapeSize = (CRYSTAL_SIZE / 2) * .93
	  this.posX = (CRYSTAL_SIZE / 2) - (this.shapeSize / 2)
  }

  render() {
    noFill()
    stroke(this.color)

    push()

    translate(width / 2, height / 2)

    for (let i = 0; i < this.numShapes; i++) {
      ellipse(this.posX, 0, this.shapeSize, this.shapeSize)
      rotate(this.angle)
    }

    pop()
  }

}
