import Game from './game'
import FlyingNinja from './game_view';
console.log()
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById('flying-ninja');
  const game = new Game();
  new FlyingNinja(game, canvas)
})

