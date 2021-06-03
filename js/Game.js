/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor() {
     this.missed = 0;
     this.phrases = [];
     this.activePhrase = null;
     this.letterSet = new Set();
     this.createPhrases();
   }
   /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
      const slogans = [
        'Just do it',
        "Whats in your wallet",
        'The Happiest Place on Earth',
        'The snack that smiles back',
        "Gotta catch em all",
        'Think Different',
        'Breakfast of Champions'
      ];
      for(let i = 0; i < slogans.length; i++) {
        this.phrases.push(new Phrase(slogans[i]));
      }
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
      let randomNumber = Math.floor(Math.random() * this.phrases.length);
      return this.phrases[randomNumber];
    }

    /**
    * Begins game by selecting a phrase and displaying it to user
    */
    startGame() {
      document.querySelector('#overlay').style.display = 'none';
      let startingPhrase = this.getRandomPhrase();
      startingPhrase.addPhraseToDisplay();
      this.activePhrase = startingPhrase;
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
      const letterElements = document.querySelectorAll('li.hide');
      if(letterElements.length === 0) {
        this.gameOver(true);
      }
    };



    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
      this.missed += 1;
      const heartElement = document.querySelector('.tries img[src="images/liveHeart.png"]');
      heartElement.src = 'images/lostHeart.png';
      if(this.missed === 5) {
        this.gameOver(false);
      }
    };

    /**
    * Reset Hearts
    */
    resetHearts() {
      const heartElements = document.querySelectorAll('.tries img[src="images/lostHeart.png"]');
      heartElements.forEach((heart, i) => {
        heart.src = 'images/liveHeart.png';
      });
      this.missed = 0;
    }

    /**
    * Reset keyboard
    */
    resetKeyboard() {
      const usedKeys = [...document.querySelectorAll('.key.chosen'), ...document.querySelectorAll('.key.wrong')];
      usedKeys.forEach((key, i) => {
        if(key.classList.contains('chosen')) {
          key.classList.remove('chosen');
        }
        else if(key.classList.contains('wrong')) {
          key.classList.remove('wrong');
        }
        key.disabled = false;
      });

    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
      //display overlay
      const overlay = document.querySelector('#overlay');
      const overlayH1 = document.querySelector('#game-over-message');
      overlay.style.display = 'block';
      overlay.classList.remove('start');
      if(gameWon) {
        overlay.classList.add('win');
        overlayH1.innerHTML = "You Won!";
      }
      else {
        overlay.classList.add('lose');
        overlayH1.innerHTML = "You Lost!";
      }
      this.activePhrase.removePhraseFromDisplay();
      this.resetHearts();
      this.resetKeyboard();
      document.querySelector('#btn__reset').textContent = "Play Again";
    };

    /**
    * Does some brunt work to handle the UI
    * @param  {event} Letter event to be used
    */
    handleUserInteraction(letter) {

      //if input is from mouseclick
      if(letter.tagName === 'BUTTON') {
        if(this.activePhrase.checkLetter(letter.textContent)) {
          this.activePhrase.showMatchedLetter(letter.textContent);
          letter.classList.add('chosen');
          this.checkForWin();
        }
        else {
          letter.classList.add('wrong');
          this.removeLife();
        }
        letter.disabled = true;
      }
      //if the input is from the keyboard
      else {

        if(this.isValidInput(letter.key)) {
          this.letterSet.add(letter.key);
          //return button of the corresponding keyboard input
          const keyButton = this.findHTMLButtonUsingKey(letter.key)
          if(this.activePhrase.checkLetter(letter.key)) {
            this.activePhrase.showMatchedLetter(letter.key);
            keyButton.classList.add('chosen');
            this.checkForWin();
          }
          else {
            keyButton.classList.add('wrong');
            this.removeLife();
          }
          keyButton.disabled = true;
        }
      }

    }

    /**
    * Find a the key corresponding to the keyboard input
    * @param {string} letter inputted by the user on the userKeyboard
    * @return {button} the button that has the same textContent as the input key
    */
    findHTMLButtonUsingKey(keyLetter) {
      const keys = document.querySelectorAll('.key');
      for(let i = 0; i < keys.length; i++) {
        if(keys[i].textContent === keyLetter) {
          return keys[i];
        }
      }
    }

    /**
    * Check if the keyboard input is valid input - if the character is from a - z
    */
    isValidInput(keyLetter) {
      return /^[a-z]+$/.test(keyLetter) && !this.letterSet.has(keyLetter);
    }

 }
