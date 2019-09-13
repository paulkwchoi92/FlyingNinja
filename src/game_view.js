import BackGround from "./background";
import Ninja from "./ninja";
import Enemy from "./ enemy";
import Game from "./game"

export default class FlyingNinja {
  constructor( canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.game = new Game(this.ctx);
    this.ninja = new Ninja(this.dimensions, this.ctx);
    this.background = new BackGround(this.dimensions, this.ctx);
    this.enemy = new Enemy(this.game.level, this.ctx);
    // this.begScreenAudio()
    
    this.keypressListener();
    this.animate();

    this.animate = this.animate.bind(this);
  }
  keypressListener() {
    this.moveNinja = this.ninja.moveNinja.bind(this);
    window.addEventListener("keydown", this.moveNinja);
  }
  begScreenAudio() {
    const begMusic = new Audio();
    const fightMusic = new Audio();
    begMusic.src = "./sounds/begMusic";
    fightMusic.src = "./sounds/fightMusic";
    // begMusic.play()
    const playMusic = begMusic.play()
    if (playMusic !== undefined) {
      playMusic.then(_ => { debugger
      })
        .catch(error => {
        });
    }
    playMusic
  }
  fightScreenAudio() {
    this.begMusic.pause();
    this.fightMusic.play();
  }
  
  
  animate() {
    if (this.ninja.start) {
      // this.fightScreenAudio()
      const numOfEnemies = this.level * 3;
      for (let i = 0; i > numOfEnemies; i++) {}
      const bg = document.getElementById("background");

      this.ctx.drawImage(bg, 0, 0);
      this.ninja.animate();
      this.background.animate();
      this.enemy.animate();
      this.game.animate()
    } else {
      // this.begScreenAudio()
      const bg = document.getElementById("background");
      this.ctx.drawImage(bg, 0, 0);
      this.ctx.font = "900 70px Times";
      this.ctx.fillText("Press 'p' to play", 250, 300);
    }
    requestAnimationFrame(this.animate.bind(this));
  }
}
