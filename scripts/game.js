'use-strict';
const letters = document.querySelectorAll('.letter');
const answer = document.getElementById('answer-section');
let counter = 0;

const randomWordGenerator = (arr) => arr[Math.floor(Math.random() * arr.length)];
const letter = (dashesArr, i) => `<p>${dashesArr[i]}</p>`;
const renderAnswer = (word, dashesArr) => {
  answer.innerHTML = '';
  for (let i = 0; i < word.length; i++) answer.innerHTML += letter(dashesArr, i);
};

const checkExistingLetter = (word, userLetter, dashesArr) => {
  let found = false;

  for (let i = 0; i < word.length; i++) {
    if (dashesArr[i] !== '_') continue;
    if (userLetter === word[i]) {
      dashesArr[i] = userLetter;
      found = true;
      break;
    }
  }

  if (!found) {
    if (counter === 0) head();
    else if (counter === 1) body();
    else if (counter === 2) rightHand();
    else if (counter === 3) leftHand();
    else if (counter === 4) rightLeg();
    else if (counter === 5) {
      leftLeg();
    }
    counter++;
  }

  renderAnswer(word, dashesArr);
};

const handleClickOnKeyboard = (word, dashesArr, e) => checkExistingLetter(word, e.key, dashesArr);
const handleClickOnLetters = (word, dashesArr, e) => checkExistingLetter(word, e.target.innerText.toLowerCase(), dashesArr);

function game() {
  const words = ['ambitious', 'conscientious', 'perceptive', 'persistence', 'leadership', 'organization', 'enthusiasm', 'curiosity'];
  const word = randomWordGenerator(words);
  const dashesArr = Array.from({ length: word.length }, () => '_');
  renderAnswer(word, dashesArr);
  document.addEventListener('keydown', handleClickOnKeyboard.bind(null, word, dashesArr));
  letters.forEach((letter) => letter.addEventListener('click', handleClickOnLetters.bind(null, word, dashesArr)));
}

game();

// ! Note call method immediatley invokes the function with specified this value and arguments so it's not useful to be used here instead bind method will work !!! 🎉
// letter.addEventListener('click', handleClickOnLetters.call(this, word));
