// Computer choice for rock paper scissors
const getComputerChoice = () => {
  random = Math.floor(Math.random() * 3);
  if (random == 0) {
    return 'rock'
  }
  else if (random == 1) {
    return 'paper'
  }
  else if (random == 2) {
    return 'scissors'
  }
}

// Human choice for rock paper scissors
const getHumanChoice = () => {
  choice = prompt("Enter 'rock', 'paper' or 'scissors").toLowerCase()
  return choice
}

// Initialising Scores
let humanScore = 0
let computerScore = 0


// Logic for 1 round of game
const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log('You Win! Paper beats Rock');
    humanScore += 1
  }
  else if (humanChoice === 'rock' && computerChoice === 'paper') {
    console.log('You Lose! Paper beats Rock');
    computerScore += 1
  }
  else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    console.log('You Lose! Scissors beats Paper');
    computerScore += 1
  }
  else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log('You Win! Scissors beats Paper');
    humanScore += 1
  }
  else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log('You Win! Rock beats Scissors');
    humanScore += 1
  }
  else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    console.log('You Lose! Rock beats Scissors');
    computerScore += 1
  }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

console.log(`You chose ${humanSelection}`)
console.log(`Computer chose ${computerSelection}`)
console.log(playRound(humanSelection, computerSelection))