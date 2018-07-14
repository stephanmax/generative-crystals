class Lines extends Layer {
  
  constructor() {
    super()
    this.start = floor(random(this.numSteps - 1))
	  this.end = floor(random(this.start, this.numSteps))
  }

  render() {
    stroke(this.color)
    strokeWeight(this.strokeWeight)

    push()
    
    translate(width / 2, height / 2)
    
    for (let i = 0; i < this.numShapes; i++) {
      line(this.start * this.stepLength, 0, this.end * this.stepLength, 0)
      rotate(this.angle)
    }

    pop()
  }

}
