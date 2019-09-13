export default class Game {
  constructor(ctx) {
    this.ctx = ctx
    this.point = 0;
    this.level = 1;
    this.life = 3;
  }
  


  incrementLevel() {
    if (this.point % 5 === 0) {
      this.level += 1;
    }
  }

  animate() {
    this.ctx.font = "600 24px Times"
    this.ctx.fillText(`Level: ${this.level}`, 50, 50)
    this.ctx.fillText(`Points: ${this.point}`, 50, 75)
    this.ctx.fillText(`Life: ${this.life}`, 50, 100)
  }
}
