/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
   }

   /**
   * Display phrase on game board
   */
   addPhraseToDisplay() {
     const phraseList = document.querySelector('#phrase ul');
     for(let i = 0; i < this.phrase.length; i++) {
       let newLetter = document.createElement('li');
       if(this.phrase[i] !== ' ') {
         newLetter.className = `hide letter ${this.phrase[i]}`;
       }
       else {
         newLetter.className = `space`;
       }
       phraseList.append(newLetter);
     }
   }

   /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  showMatchedLetter(letter) {
    const letterElements = document.querySelector('li.hide');
    console.log(letterElements);
  }

   /**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check
  */
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }
 }
