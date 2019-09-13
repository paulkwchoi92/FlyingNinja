import BackGround from "./background";
import Ninja from "./ninja";
import Enemy from "./ enemy";

export default class FlyingNinja {
  constructor(game, canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.game = game;
    this.ninja = new Ninja(this.dimensions, this.ctx);
    this.background = new BackGround(this.dimensions, this.ctx);
    this.enemy = new Enemy(this.game.level, this.ctx);
    this.begMusic = new Audio();
    this.fightMusic = new Audio();
    this.begMusic.src = "./sounds/begMusic";
    this.fightMusic.src = "./sounds/fightMusic";
    this.animate();
    this.keypressListener();

    this.animate = this.animate.bind(this);
  }
  keypressListener() {
    this.moveNinja = this.ninja.moveNinja.bind(this);
    window.addEventListener("keydown", this.moveNinja);
  }
  begScreenAudio() {
    this.begMusic.play();
  }
  fightScreenAudio() {
    this.begMusic.pause();
    this.fightMusic.play();
  }
  start() {
    // this.animate()
    this.game.start ? this.animate() : this.animateIntro();

    requestAnimationFrame(this.start.bind(this));
  }
  animateIntro() {
  
    this.ctx.font = "900 70px Times";
    this.ctx.fillText("Press 'p' to play", 250, 300);
    // requestAnimationFrame(this.animateIntro.bind(this))
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
