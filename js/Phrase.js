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
   * Remove phrase from display
   */
   removePhraseFromDisplay() {
     const phraseList = document.querySelector('#phrase ul');
     const phraseListLetters = phraseList.children;
     //need to use the spread operator since the children are not an array yet
     [...phraseListLetters].forEach((letterElement, i) => {
       phraseList.removeChild(letterElement);
     });
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
