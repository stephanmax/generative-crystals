class DottedLines extends Layer {
  
  constructor() {
    super()
    this.dotSize = 4
	  this.offset = this.stepLength
  }

  render() {
    noStroke()
    fill(this.color)

    push()
    
    translate(width / 2, height / 2)
    
    for (let i = 0; i < this.numShapes; i++) {
      
      for(let posX = this.offset; posX < CRYSTAL_SIZE / 2; posX += this.stepLength) {
        rect(posX, 0, this.dotSize, this.dotSize)
      }

      rotate(this.angle)
    }

    pop()
  }

}
