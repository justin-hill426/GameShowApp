/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//constants
//start game button
const startGameButton = document.querySelector('#btn__reset');

//ui keyboard
const userKeyboard = document.querySelector('#qwerty');

//get the element representing the title screen
const overlay = document.querySelector('#overlay');
let game = new Game();


startGameButton.addEventListener('click', () => {
  game = new Game();
  game.startGame();
});



userKeyboard.addEventListener('click', (e)  => {
  if(gameInProgress()) {
    if(e.target.tagName === 'BUTTON') {
      game.handleUserInteraction(e.target);
    }
  }
});

document.addEventListener('keyup', e => {
  if(gameInProgress()) {
    game.handleUserInteraction(e);
  }
  else {
    if(e.key === "Enter") {
      game.startGame();
    }
  }
});



/**
* Checks if the game is in progress
* @return {Boolean}
*/
function gameInProgress() {
  return overlay.style.display === 'none';
}
