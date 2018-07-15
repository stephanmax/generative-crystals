class Wave extends Layer {
  
  constructor() {
    super()

    this.offset = (CRYSTAL_SIZE_ACTUAL / 2) * .15
    this.stepLength = (CRYSTAL_SIZE_ACTUAL / 2) * .85 / this.numSteps
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
