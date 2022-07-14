const playerChoiceBtns = document.querySelectorAll('.player-selection');
const winningMessage = document.querySelector('.winning-message');
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');

let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let winner;
let tie = false;

const randomComputerSelection = function () {
  const randomChoice = Math.floor(Math.random() * 3) + 1;
  if(randomChoice === 1){
    computerSelection = 'Rock';
  }else if(randomChoice === 2){
    computerSelection = 'Paper';
  }else if(randomChoice === 3){
    computerSelection = 'Scissors';
  }
};

playerChoiceBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    playerSelection = btn.dataset.selection;
    randomComputerSelection();
    initWinner();
  });
});


function initWinner(){
  if(playerSelection === computerSelection){
    tie = true;
    checkWinner()
  }else if(playerSelection === 'Rock' && computerSelection === 'Scissors' ||
  playerSelection === 'Paper' && computerSelection === 'Rock' ||
  playerSelection === 'Scissors' && computerSelection === 'Paper'){
    winner = 'Player';
    checkWinner()
  }else if(playerSelection === 'Scissors' && computerSelection === 'Rock' ||
  playerSelection === 'Rock' && computerSelection === 'Paper' ||
  playerSelection === 'Paper' && computerSelection === 'Scissors'){
    winner = 'Computer';
    checkWinner();
  }
}

function checkWinner(){
if(tie === true){
  winningMessage.textContent = "Its A Tie";
  tie = false;
}else if(winner === 'Player'){
  playerScore++;
  playerScoreElement.textContent = `Player ${playerScore}`;
  renderWinner(playerSelection, computerSelection)
}else if(winner === 'Computer'){
  computerScore++;
  computerScoreElement.textContent = `Computer ${computerScore}` ;
  renderWinner(computerSelection, playerSelection)
}
}

function renderWinner(winningSelection, losingSelection){
  winningMessage.textContent = `${winner} Wins! ${winningSelection} beats ${losingSelection}`;
}
