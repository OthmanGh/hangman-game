// Implement the logic for the following hangman game. You are only allowed to write your code in game.js file. You cannot change any other files.

// Rules:
// - When the game starts pick a random word and display dashes according to the length of the word.
// - User can click on the letters or type using the keyboard.
// - Each time the game restarts you should pick another random word (words are from your choice).
// - If the user gets a wrong letter, build 1 additional part of the hang till it is completed, if correct display the letters in their correct positions.

// Selecting Elements
const letters = document.querySelectorAll('.letter');
const answer = document.getElementById('answer-section');

// Functions
const randomWordGenerator = (arr) => {
  const wordIndex = Math.floor(Math.random() * arr.length);
  return arr[wordIndex];
};

const generateDashes = (word) => {
  const len = word.length;

  for (let i = 0; i < len; i++) {
    answer.innerText += '-';
  }
};

function game() {
  const words = ['antifungal', 'antifungals', 'bifunctional', 'cofunction', 'cofunctions'];

  const word = randomWordGenerator(words);
  generateDashes(word);
}

game();
