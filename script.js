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

// Initialising Scores
let humanScore = 0
let computerScore = 0
// Logic for 1 round of game
const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    console.log(`Computer chose ${computerChoice}`)
    console.log(`You chose ${humanChoice}`)
    console.log('Draw, play again')
  }
  else if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log(`Computer chose ${computerChoice}`)
    console.log(`You chose ${humanChoice}`)
    console.log('You Win! Paper beats Rock');
    humanScore += 1
  }
  else if (humanChoice === 'rock' && computerChoice === 'paper') {
    console.log(`Computer chose ${computerChoice}`)
    console.log(`You chose ${humanChoice}`)
    console.log('You Lose! Paper beats Rock');
    computerScore += 1
  }
  else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    console.log(`Computer chose ${computerChoice}`)
    console.log(`You chose ${humanChoice}`)
    console.log('You Lose! Scissors beats Paper');
    computerScore += 1
  }
  else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log(`Computer chose ${computerChoice}`)
    console.log(`You chose ${humanChoice}`)
    console.log('You Win! Scissors beats Paper');
    humanScore += 1
  }
  else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log(`Computer chose ${computerChoice}`)
    console.log(`You chose ${humanChoice}`)
    console.log('You Win! Rock beats Scissors');
    humanScore += 1
  }
  else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    console.log(`Computer chose ${computerChoice}`)
    console.log(`You chose ${humanChoice}`)
    console.log('You Lose! Rock beats Scissors');
    computerScore += 1
  }
  checkWinner()
}

    
// Human choice for rock paper scissors
const getHumanChoice = (e) => {
let playerSelection = (e.target.value);
  playRound(playerSelection, getComputerChoice())
}

const h1 = document.querySelector('h1')
h1.textContent = 'Rock Paper Scissors'
    
const div = document.querySelector('div')
const list = document.querySelector('ul')
div.appendChild(list)
div.classList.add('options')
    
const rock = document.createElement("button")
list.appendChild(rock)
rock.textContent = "Rock"
rock.value = "rock"
    
const paper = document.createElement("button")
list.appendChild(paper)
paper.textContent = "Paper"
paper.value = 'paper'
    
const scissors = document.createElement("button")
list.appendChild(scissors)
scissors.textContent = "Scissors"
scissors.value = 'scissors'
    
const optionsBtn = document.querySelectorAll('.options button');
optionsBtn.forEach((button) => {
  button.addEventListener('click', getHumanChoice);
})

const checkWinner = () => {
  if (humanScore == 5 && humanScore > computerScore) {
    console.log(`You won the game! The score was ${humanScore} - ${computerScore}`)
  }
  else if (computerScore == 5 && humanScore < computerScore) {
    console.log(`You lost the game :( The score was ${humanScore} - ${computerScore}`)
  }
}