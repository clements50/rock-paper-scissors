const playerChoiceBtns = document.querySelectorAll('.player-selection');
const winningMessage = document.querySelector('.winning-message');
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
const playerMoveElement = document.querySelector('.player-move');
const computerMoveElement = document.querySelector('.computer-move');
const modalBackground = document.querySelector('.modal-bkg');
const modalWinMessage = document.querySelector('.modal-winning-message');
const playAgainBtn = document.querySelector('.play-again-btn');

let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

const randomComputerSelection = function () {
  const randomChoice = Math.floor(Math.random() * 3) + 1;
  if (randomChoice === 1) {
    computerSelection = 'Rock';
  } else if (randomChoice === 2) {
    computerSelection = 'Paper';
  } else if (randomChoice === 3) {
    computerSelection = 'Scissors';
  }
};

function initWinner() {
  checkWinner();
  if (playerSelection === 'Rock' && computerSelection === 'Rock') {
    playerMoveElement.textContent = '🪨';
    computerMoveElement.textContent = '🪨';
    winningMessage.textContent = "It's A Tie";
  } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
    playerMoveElement.textContent = '🧻';
    computerMoveElement.textContent = '🧻';
    winningMessage.textContent = "It's A Tie";
  } else if (
    playerSelection === 'Scissors' &&
    computerSelection === 'Scissors'
  ) {
    playerMoveElement.textContent = '✂️';
    computerMoveElement.textContent = '✂️';
    winningMessage.textContent = "It's A Tie";
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    winner = 'Player';
    playerMoveElement.textContent = '🪨';
    computerMoveElement.textContent = '✂️';
    playerScore++;
    playerScoreElement.textContent = `Player ${playerScore}`;
    renderWinner('Player', playerSelection, computerSelection);
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    playerMoveElement.textContent = '🧻';
    computerMoveElement.textContent = '🪨';
    playerScore++;
    playerScoreElement.textContent = `Player ${playerScore}`;
    renderWinner('Player', playerSelection, computerSelection);
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    playerMoveElement.textContent = '✂️';
    computerMoveElement.textContent = '🧻';
    playerScore++;
    playerScoreElement.textContent = `Player ${playerScore}`;
    renderWinner('Player', playerSelection, computerSelection);
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    playerMoveElement.textContent = '✂️';
    computerMoveElement.textContent = '🪨';
    computerScore++;
    computerScoreElement.textContent = `Computer ${computerScore}`;
    renderWinner('Computer', computerSelection, playerSelection);
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    playerMoveElement.textContent = '🪨';
    computerMoveElement.textContent = '🧻';
    computerScore++;
    computerScoreElement.textContent = `Computer ${computerScore}`;
    renderWinner('Computer', computerSelection, playerSelection);
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    playerMoveElement.textContent = '🧻';
    computerMoveElement.textContent = '✂️';
    computerScore++;
    computerScoreElement.textContent = `Computer ${computerScore}`;
    renderWinner('Computer', computerSelection, playerSelection);
  }
}

function renderWinner(winner, winningSelection, losingSelection) {
  winningMessage.textContent = `${winner} Wins! ${winningSelection} beats ${losingSelection}`;
}

function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    modalBackground.style.display = 'flex';
    if (computerSelection === 5) {
      modalWinMessage.textContent = 'Computer Wins!';
    } else if (playerScore === 5) {
      modalWinMessage.textContent = 'Player Wins!';
    }
  }
}

function playRound() {
  playerChoiceBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (playerScore === 5 || computerScore === 5) {
        checkWinner();
      } else if (playerScore != 5 && computerSelection != 5) {
        playerSelection = btn.dataset.selection;
        randomComputerSelection();
        initWinner();
      }
    });
  });
}

playRound();

playAgainBtn.addEventListener('click', () => {
  playAgain();
});

function playAgain() {
  playerSelection = '';
  computerSelection = '';
  playerScore = 0;
  computerScore = 0;
  computerMoveElement.textContent = '💻';
  playerMoveElement.textContent = '🧑';
  winningMessage.textContent = null;
  computerScoreElement.textContent = 'Computer 0';
  playerScoreElement.textContent = 'Player 0';
  modalBackground.style.display = 'none';
}
