class DottedLines extends Layer {
  
  constructor() {
    super()
    this.dotSize = 1
	  this.offset = this.stepLength
  }

  render() {
    noStroke()
    fill(this.color)

    push()
    
    for (let i = 0; i < this.numShapes; i++) {
      
      for(let posX = this.offset; posX < CRYSTAL_SIZE_ACTUAL / 2; posX += this.stepLength) {
        rect(posX, 0, this.dotSize, this.dotSize)
      }

      rotate(this.angle)
    }

    pop()
  }

}
