class Layer {

  constructor() {
    this.sides = SIDES
    this.numShapes = random([1, 2]) * this.sides
    this.angle = 360 / this.numShapes

    this.numSteps = random([8, 10])
    this.stepLength = (CRYSTAL_SIZE / 2) / this.numSteps
    
    this.color = random(PALETTE)
    this.strokeWeight = random([1, 2])
  }

}
