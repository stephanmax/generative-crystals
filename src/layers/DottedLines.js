import Layer from './Layer.js'

export default class DottedLines extends Layer {
  
  constructor() {
    super(...arguments)

    this.dotSize = 1
	  this.offset = this.stepLength
  }

  render() {
    noStroke()
    fill(this.color)

    push()
    
    for (let i = 0; i < this.numShapes; i++) {
      
      for(let posX = this.offset; posX < this.radius; posX += this.stepLength) {
        rect(posX, 0, this.dotSize, this.dotSize)
      }

      rotate(this.angle)
    }

    pop()
  }

}
