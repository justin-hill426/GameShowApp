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
        'Just do it',
        "What's in your wallet",
        'The Happiest Place on Earth',
        'The snack that smiles back',
        "Gotta catch 'em all",
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
    * Does some brunt work to handle the UI
    * @param  {string} Letter to be used
    */
    handleUserInteraction(letter) {
      return this.activePhrase.checkLetter(letter);
    }
 }
