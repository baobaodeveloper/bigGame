'use strict';

// selecting element
// const score0El = document.getElementById('score--0');
// const score1El = document.getElementById('score--1');
// const diceEl = document.querySelector('.dice');
// const btnRoll = document.querySelector('.btn--roll');
// const btnNew = document.querySelector('.btn--new');
// const btnHold = document.querySelector('.btn--hold');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');

// let currentScore, activePlayer, playing, scores;

// const init = function () {
//   currentScore = 0;
//   activePlayer = 0;
//   scores = [0, 0];
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   diceEl.classList.add('hidden');
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };

// init();

// const switchPlayer = function () {
//   currentScore = 0;
//   document.getElementById(`current--${activePlayer}`).textContent =
//     currentScore;
//   activePlayer = activePlayer === 0 ? 1 : 0;

//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// btnRoll.addEventListener('click', () => {
//   if (playing) {
//     // 1.Generating a random dice roll
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     // 2.Display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     // Check for rolled 1: if true, switch to next player

//     if (dice !== 1) {
//       currentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       switchPlayer();
//     }
//   }
// });

// btnHold.addEventListener('click', () => {
//   if (playing) {
//     scores[activePlayer] += currentScore;

//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     if (scores[activePlayer] >= 20) {
//       playing = false;
//       diceEl.classList.add('hidden');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//     } else {
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener('click', init);

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

let currentRoll, player, playing, scores;
const init = function () {
  currentRoll = 0;
  player = 0;
  playing = true;
  scores = [0, 0];

  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
};

init();

const switchPlayer = function () {
  currentRoll = 0;
  document.getElementById(`current--${player}`).textContent = currentRoll;
  player = player === 0 ? 1 : 0;
};

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    if (dice !== 1) {
      currentRoll += dice;
      document.getElementById(`current--${player}`).textContent = currentRoll;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    scores[player] += currentRoll;
    document.getElementById(`score--${player}`).textContent = scores[player];

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    if (scores[player] >= 20) {
      document
        .querySelector(`.player--${player}`)
        .classList.add('player--winner');

      playing = false;
      diceEl.classList.add('hidden');
      player0El.classList.remove('player--active');
      player1El.classList.remove('player--active');

      currentRoll = 0;
      document.getElementById(`current--${player}`).textContent = currentRoll;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
