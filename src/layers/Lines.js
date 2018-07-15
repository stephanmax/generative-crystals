import Layer from './Layer.js'

export default class Lines extends Layer {
  
  constructor() {
    super(...arguments)

    this.numShapes = random([1, 2]) * this.sides
    this.angle = 360 / this.numShapes

    this.start = floor(random(this.numSteps - 1))
	  this.end = floor(random(this.start, this.numSteps))
  }

  render() {
    stroke(this.color)
    strokeWeight(this.strokeWeight)

    push()
    
    for (let i = 0; i < this.numShapes; i++) {
      line(this.start * this.stepLength, 0, this.end * this.stepLength, 0)
      rotate(this.angle)
    }

    pop()
  }

}
