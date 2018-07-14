class Outline extends Layer {
  
  constructor() {
    super()
  }

  render() {
    noFill()
    stroke(this.color)
    strokeWeight(this.strokeWeight)

    push()

    if (random([true, false])) {
      polygon(6, 0, 0, CRYSTAL_SIZE / 2)
    }
    else {
      ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    }

    pop()
  }

}
