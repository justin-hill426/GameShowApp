/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


 class Game {
   constructor() {
     this.missed = 0;
     this.phrases = [];
     this.activePhrase = null;
     this.createPhrases();
   }
   /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
      const slogans = [
        'H',
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
      console.log(letterElements);
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
    };

    /**
    * Does some brunt work to handle the UI
    * @param  {event} Letter event to be used
    */
    handleUserInteraction(letter) {
      letter.disabled = true;
      if(this.activePhrase.checkLetter(letter.target)) {
        this.activePhrase.showMatchedLetter(letter.target);
        letter.classList.add('chosen');
        this.checkForWin();
      }
      else {
        letter.classList.add('wrong');
        this.removeLife();
      }
    }
 }
