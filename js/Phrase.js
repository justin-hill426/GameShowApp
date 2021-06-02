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
       newLetter.innerHTML = this.phrase[i];
       phraseList.append(newLetter);
     }
   }

   /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  showMatchedLetter(letter) {
    const letterElements = document.querySelectorAll('li.hide');
    letterElements.forEach((letterElement, i) => {
      if(letterElement.classList.contains(letter)) {
        letterElement.classList.remove('hide');
        letterElement.classList.add('show');
      }
    });
  }

   /**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check
  */
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }
 }
