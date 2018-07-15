import Layer from './Layer.js'
import { polygon } from '../util.js'

export default class Outline extends Layer {
  
  constructor() {
    super(...arguments)
  }

  render() {
    noFill()
    stroke(this.color)
    strokeWeight(this.strokeWeight)

    push()

    if (random([true, false])) {
      polygon(6, 0, 0, this.radius)
    }
    else {
      ellipse(0, 0, this.size, this.size)
    }

    pop()
  }

}
