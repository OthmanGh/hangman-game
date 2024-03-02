'use-strict';
const letters = document.querySelectorAll('.letter');
const answer = document.getElementById('answer-section');
let counter = 0;

const randomWordGenerator = (arr) => arr[Math.floor(Math.random() * arr.length)];

const renderLetterPlaceHolder = (dashesArr, i) => `
<div>
<p>${dashesArr[i]}</p>
</div>`;

const renderAnswer = (word, dashesArr) => {
  answer.innerHTML = '';
  for (let i = 0; i < word.length; i++) answer.innerHTML += renderLetterPlaceHolder(dashesArr, i);
};

const checkExistingLetter = (word, userLetter, dashesArr) => {
  // will be modified
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
};

const handleClickOnKeyboard = function (word, dashesArr, e) {
  checkExistingLetter(word, e.key, dashesArr);
};

const handleClickOnLetters = function (word, dashesArr, e) {
  checkExistingLetter(word, e.target.innerText.toLowerCase(), dashesArr);
};

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
