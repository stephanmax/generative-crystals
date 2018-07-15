import Layer from './Layer.js'

export default class Circles extends Layer {
  
  constructor() {
    super(...arguments)

    this.shapeSize = this.radius * .93
	  this.posX = this.radius - (this.shapeSize / 2)
  }

  render() {
    noFill()
    stroke(this.color)

    push()

    for (let i = 0; i < this.numShapes; i++) {
      ellipse(this.posX, 0, this.shapeSize, this.shapeSize)
      rotate(this.angle)
    }

    pop()
  }

}
