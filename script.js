'use strict';
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
let curentScore = 0;
let totalScore = 0;
let score = document.querySelector('.score');
let current = document.querySelector('#current--0');
///////////////

btnRollDice.addEventListener('click', function () {
  let radomRollNumber = Math.floor(Math.random() * 6 + 1);
  if (radomRollNumber !== 1) {
    curentScore += radomRollNumber;
    current.textContent = curentScore;
  } else {
    curentScore = 0;
    current.textContent = curentScore;
  }
  dice.setAttribute(`src`, `dice-${radomRollNumber}.png`);
});

btnHold.addEventListener('click', function () {
  score.textContent = totalScore + curentScore;
});
