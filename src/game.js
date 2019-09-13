export default class Game {
  constructor() {
    this.start = false;
    this.renderKeys = false;
    this.point = 0;
    this.level = 1;
    this.gameStarter = this.gameStarter.bind(this)
  }
  collidedWidth(object1, object2) { }
  
  gameStarter(e) {
    
    switch (e.key) {
      case "p":
        return this.start = true;
      case "i":
        return this.renderKeys = true;
      default:
        return this.start 
    }
  }

  incrementLevel() {
    if (this.point % 5 === 0) {
      this.level += 1;
    }
  }

 
}
