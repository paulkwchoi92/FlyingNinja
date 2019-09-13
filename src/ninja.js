import NinjaStars from "./ninja_stars";

const CONSTANTS = {
  
  NINJA_WIDTH: 50,
  NINJA_HEIGHT: 50
};

export default class Ninja  {
  constructor(dimensions, ctx) {
    this.dimensions = dimensions;
    this.x = this.dimensions.width / 6;
    this.y = this.dimensions.height / 5;
    this.vel = 30
    this.ctx = ctx
    this.start = false
    this.moveNinja = this.moveNinja.bind(this)
    this.coordinates = {x: this.x + 50, y: this.y}
    
  }

  moveNinja(e) {
    switch (e.key) {
      case "ArrowLeft":
        if (this.x === -14.5) {
          return this.x
        }
        return this.x -= this.vel;
      case "ArrowRight":
        if (this.x === 945.5) {
          return this.x
        }
        return this.x +=  this.vel;
      case "ArrowUp":
        if (this.y === -20) {
          return this.y
        }
        return this.y -= this.vel;
      case "ArrowDown":
        if (this.y === 610) {
          return this.y
        }
        return this.y += this.vel;
      case " ":
        this.ninjaStar = new NinjaStars({ x: this.x, y: this.y }, this.ctx)
        return this.ninjaStar.animate()
      case "p":
        return this.start = true
      default:
        return this.x
    }
  }

  

  animate() {
    const ninja = document.getElementById('main')
    this.ctx.drawImage(ninja, this.x, this.y, CONSTANTS.NINJA_WIDTH, CONSTANTS.NINJA_HEIGHT) //asdasdasd
    
  }
}