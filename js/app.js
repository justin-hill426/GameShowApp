/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//constants
//start game button
const startGameButton = document.querySelector('#btn__reset');

//ui keyboard
const userKeyboard = document.querySelector('#qwerty');



const game = new Game();
startGameButton.addEventListener('click', () => {
  game.startGame();
});

userKeyboard.addEventListener('click', (e)  => {
  game.handleUserInteraction(e);
});
