class Crystal {
  
  constructor(x, y) {
    this.x = x
    this.y = y
    this.layers = layerConfig
      .filter(layer => {
        return random(1) <= layer.weight
      })
      .map(layer => new layer.class)
    console.log(this.layers)
  }

  render() {
    this.layers.forEach(layer => layer.render())
  }

}
