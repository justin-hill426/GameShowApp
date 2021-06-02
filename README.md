# GameShowApp

a browser-based, word guessing game: "Phrase Hunter." Uses JavaScript and OOP (Object-Oriented Programming) to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.

The code will choose a random phrase, split the phrase into letters, and put those letters onto the gameboard.

Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the gameboard displays the chosen letters on the screen.

A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).

If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears.

A player can guess a letter only once. After they’ve guessed a letter, the program will disable that letter on the onscreen keyboard.



STYLE CHANGES:
 Changed Background color to a more fitting light grey.
 Changed start/replay button to light green.
 Changed the color of valid input letters and wrong input letters to green/red respectively
 Added check using regex to make sure the keyboard input from the user is an underscore alphabetic character
 Added functionality to start/restart the game with the enter key.
