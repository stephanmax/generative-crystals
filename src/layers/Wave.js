import Layer from './Layer.js'
import { polygon } from '../util.js'

export default class Wave extends Layer {
  
  constructor() {
    super(...arguments)

    this.offset = this.radius * .15
    this.stepLength = this.radius * .85 / this.numSteps
  }

  render() {
    noFill()
    stroke(this.color)
    strokeWeight(this.strokeWeight)

    push()

    for (let i = 1; i <= this.numSteps; i++) {
      polygon(6, 0, 0, this.offset + (i * this.stepLength), 30)
    }

    pop()
  }

}
