// Implement the logic for the following hangman game. You are only allowed to write your code in game.js file. You cannot change any other files.

// Rules:
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

const checkExistingLetter = (word, userLetter) => {
  if (word.includes(userLetter)) {
    console.log(userLetter, 'exist');
  }
};

const handleClickOnKeyboard = function (word, e) {
  console.log(e);
};

const handleClickOnLetters = function (word, e) {
  console.log(e.target.innerText.toLowerCase());
};

function game() {
  const words = ['ambitious', 'conscientious', 'perceptive', 'persistence', 'leadership', 'organization', 'enthusiasm', 'curiosity'];
  const word = randomWordGenerator(words);
  console.log(word);

  generateDashes(word);
  document.addEventListener('keydown', handleClickOnKeyboard.bind(null, word));

  letters.forEach((letter) => {
    // ! Note call method immediatley invokes the function with specified this value and arguments so it's not useful to be used here instead bind method will work !!! 🎉
    // letter.addEventListener('click', handleClickOnLetters.call(this, word));

    letter.addEventListener('click', handleClickOnLetters.bind(null, word));
  });
}

game();
