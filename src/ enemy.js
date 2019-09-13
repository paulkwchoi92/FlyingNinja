const CONSTANTS = {
  EZDIRS: [[0, 1], [0, -1]],
  HARDDRIS: [[1, -1], [1, 1], [-1, 1], [1, 1]]
};
export default class Enemy {
  constructor(level, ctx) {
    this.dir = "down";
    this.numOfNinjas = level * 2;
    this.vel = level * 5;
    if (level < 5) {
      this.hits = 1;
    } else {
      this.hits = level / 5 + 1;
    }
    this.yCoordGenerator = this.yCoordGenerator.bind(this);
    this.ctx = ctx;
    this.Yarr = this.yCoordGenerator();

    this.move = this.move.bind(this);
    this.animate = this.animate.bind(this);
  }

  randomNumGenerator(min, max) {
    return Math.random() * (max - min) + min;
  }
  yCoordGenerator() {
    const newArr = [];
    const target = this.numOfNinjas;
    for (let i = 0; i < target; i++) {
      if (newArr.length === 0) {
        newArr.push(Math.floor(this.randomNumGenerator(50, 450)));
      } else if (newArr.length !== 0 && newArr.length <= target) {
        
        const newNum = Math.floor(this.randomNumGenerator(50, 450));
        ;
        if (
          newArr.every(ele => {
            
            return newNum > ele + 50 || newNum < ele - 50;
          })
        ) {
          
          newArr.push(newNum);
        }
        
        if (newArr.length === target) return newArr;
        if (newArr.length !== target)
          this.yCoordGenerator(this.yCoordGenerator.bind(this));
      }
    }
  }

  move(y) {
    switch (this.dir) {
      case "down":
        if (y === 459 || y === 458) this.dir = "up";
        return (y += 1);
      case "up":
        if (y === 70 || y === 71) this.dir = "down";
        return (y -= 1);
      default:
        return null;
    }
  }
  animate() {
    const enemy = document.getElementById("enemy");
    for (let i = 0; i < this.Yarr.length; i++) {
      this.ctx.drawImage(enemy, 800, this.Yarr[i], 100, 100);
      this.Yarr[i] = this.move(this.Yarr[i])
    }
  }
}
