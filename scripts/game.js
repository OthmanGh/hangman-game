'use-strict';

// ! Note: I've tried to make code dry as much as possible but there is functionality issue whenever a word include duplicate letters and user guess is correct both of them will be replaced, it's 11:34 and still got 2 assignment left my brain can't debug at the moment so it's ok 😭

const letters = document.querySelectorAll('.letter');
const answer = document.getElementById('answer-section');
let counter = 0;

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
    if (counter === 0) head();
    else if (counter === 1) body();
    else if (counter === 2) rightHand();
    else if (counter === 3) leftHand();
    else if (counter === 4) rightLeg();
    else if (counter === 5) {
      leftLeg();
    }

    console.log(counter);
    counter++;
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
