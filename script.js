'use strict';
/*
// Selecting and Manipulating Elements ------------------------------------------------------------------
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳 Correct Number!';
console.log(document.querySelector('.message').textContent);


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/
// Handling Click Event ------------------------------------------------------------------
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const bodyBG = function (body) {
  document.querySelector('body').style.backgroundColor = body;
};
const numberWidth = function (number) {
  document.querySelector('.number').style.width = number;
};
const displaySecretNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};
const displayHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const restartGuess = function () {
  document.querySelector('.guess').value = '';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // ⛔ When there is no input -->
  if (!guess) {
    displayMessage('⛔ No Number');
  }

  // 🥳 When the player wins
  else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number');
    bodyBG('#60b347');
    numberWidth('30rem');
    displaySecretNumber(secretNumber);

    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }
  }

  // When guess is wrong 👎🏻
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high! 📈' : 'Too Low! 📉');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }

  // 📈 When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high! 📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // // 📉 When the guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low! 📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Again button Assignment ===
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displaySecretNumber('?');
  restartGuess();
  numberWidth('15rem');
  bodyBG('#222');
});
