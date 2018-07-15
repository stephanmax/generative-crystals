import layerConfig from './conf/layerConfig.js'

export default class Crystal {
  
  constructor(x, y, size) {
    this.x = x
    this.y = y
    this.layers = layerConfig
      .filter(layer => {
        return random(1) <= layer.weight
      })
      .map(layer => new layer.class(size))
  }

  render() {
    push()
    
    translate(this.x, this.y)
    
    this.layers.forEach(layer => layer.render())
    
    pop()
  }

}
