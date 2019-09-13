
export default class NinjaStars {
  constructor(coordinates, ctx) {
    this.x = coordinates.x 
    this.y = coordinates.y
    this.vel = 10
    this.ctx = ctx
    this.animate = this.animate.bind(this)
  }
  animate() {
    const ninjaStar = document.getElementById('ninjastar')
    this.ctx.drawImage(ninjastar, this.x, this.y, 40, 40)
    this.x += this.vel;

    requestAnimationFrame(this.animate.bind(this))
  }

}