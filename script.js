let humanScore = 0;
let computerScore = 0;

// Computer choice code
function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// console.log(getComputerChoice());

// Human choice code
function getHumanChoice() {
  let playerInput = prompt("Type 1 of 3: rock, paper, scissors");
  return playerInput;
}

// console.log(getHumanChoice());


// Play round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      console.log("Human wins");
      humanScore = humanScore + 1;
    } else {
      console.log("Computer wins");
      computerScore = computerScore + 1;
    }
  }
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  if (humanScore > computerScore) {
    console.log("You won the game. Congratulations!");
  } else if (computerScore > humanScore) {
    console.log("Oh no, computer won this time!");
  } else {
    console.log("Tie, tie, tie. Better next time.");
  }
}

playGame();