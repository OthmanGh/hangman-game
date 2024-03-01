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

const renderLetterPlaceHolder = (dashesArr, i) => {
  return `<div>
  <p>${dashesArr[i]}</p>
</div>`;
};

const renderAnswer = (word, dashesArr) => {
  const len = word.length;
  answer.innerHTML = '';

  for (let i = 0; i < len; i++) {
    answer.innerHTML += renderLetterPlaceHolder(dashesArr, i);
  }
};

const checkExistingLetter = (word, userLetter, dashesArr) => {
  let found = false;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === userLetter) {
      dashesArr[i] = userLetter;
      found = true;
    }
  }

  if (found) {
    renderAnswer(word, dashesArr);
  } else {
    console.log('Incorrect guess. Try again!');
    // Add logic for building hangman parts here
  }
};

const handleClickOnKeyboard = function (word, dashesArr, e) {
  console.log(e.key);

  checkExistingLetter(word, e.key, dashesArr);
};

const handleClickOnLetters = function (word, dashesArr, e) {
  console.log(dashesArr);
  const letter = e.target.innerText.toLowerCase();
  checkExistingLetter(word, letter, dashesArr);
};

function game() {
  const words = ['ambitious', 'conscientious', 'perceptive', 'persistence', 'leadership', 'organization', 'enthusiasm', 'curiosity'];
  const word = randomWordGenerator(words);
  console.log(word);
  const dashesArr = Array.from({ length: word.length }, () => '_');
  renderAnswer(word, dashesArr);

  // Event Listeners :
  document.addEventListener('keydown', handleClickOnKeyboard.bind(null, word, dashesArr));

  letters.forEach((letter) => {
    // ! Note call method immediatley invokes the function with specified this value and arguments so it's not useful to be used here instead bind method will work !!! 🎉
    // letter.addEventListener('click', handleClickOnLetters.call(this, word));

    letter.addEventListener('click', handleClickOnLetters.bind(null, word, dashesArr));
  });
}

game();
