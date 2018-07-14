class Outline extends Layer {
  
  constructor() {
    super()
  }

  render() {
    stroke(this.color)
    strokeWeight(this.strokeWeight)

    push()

    translate(width / 2, height / 2)

    if (random([true, false])) {
      polygon(6, 0, 0, CRYSTAL_SIZE / 2)
    }
    else {
      ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    }

    pop()
  }

}
