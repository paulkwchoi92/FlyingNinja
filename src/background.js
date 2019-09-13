
export default class BackGround {
  constructor(dimensions, ctx) {
    this.rock1 = document.getElementById("rock2")
    this.rock2 = document.getElementById("rock3")
    this.rock3 = document.getElementById("rock1");
    this.rocksArr = [rock1, rock2, rock3]
    this.dimensions = dimensions;
    this.ctx = ctx;
    this.movingRocksArr = [{ rock: this.rock3, x: this.dimensions.width }];
    this.animate = this.animate.bind(this);

  }

  animate() {
    for (let i = 0; i < this.movingRocksArr.length; i++) {
      this.ctx.drawImage(
        this.movingRocksArr[i].rock,
        this.movingRocksArr[i].x,
        540,
        300,
        300
        
      );
      this.movingRocksArr[i].x-=4 ;
      if (this.movingRocksArr[i].x === 501) {
        const randNumber = Math.floor(Math.random() * 2);
        const rock = this.rocksArr[randNumber];
        this.movingRocksArr.push({ rock: rock, x: this.dimensions.width });
      }
    }
  }
}
