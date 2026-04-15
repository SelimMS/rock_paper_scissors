const div = document.querySelector('div.options')    
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")    
const scissors = document.querySelector(".scissors")
const humanMoves = document.querySelector('h2.human')
const computerMoves = document.querySelector('h2.computer')
const outcome = document.querySelector('h2.outcome')
const current = document.querySelector('.currentScore h2')
const final = document.querySelector('.finalScore h2')
const reload = document.querySelector(".reload h2")
const optionsBtn = document.querySelectorAll('div.options div');

// Initialising Scores
let humanScore = 0
let computerScore = 0

// Human choice for rock paper scissors
const getHumanChoice = (e) => {
  let playerSelection = (e.target.id);
  playRound(playerSelection, getComputerChoice())
}

// Refreshes page/game
reload.addEventListener('click', () => {
  location.reload();
})

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

//Allows game to be started
optionsBtn.forEach(option => {
  option.addEventListener('click', getHumanChoice);
})

// Logic for Game
const playRound = (humanChoice, computerChoice) => {
  humanMoves.classList.remove('hide')
  computerMoves.classList.remove('hide')
  outcome.classList.remove('hide')

  if (humanChoice === computerChoice) {
    moveChoice(humanChoice, computerChoice)
    outcome.textContent = 'Draw Play Again!'
  }
  else if (humanChoice === 'paper' && computerChoice === 'rock') {
    moveChoice(humanChoice, computerChoice)
    outcome.textContent = 'You Win! Paper Beats Rock!'
    humanScore += 1
  }
  else if (humanChoice === 'rock' && computerChoice === 'paper') {
    moveChoice(humanChoice, computerChoice)
    outcome.textContent = 'You Lose :( Rock Beats Paper!'
    computerScore += 1
  }
  else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    moveChoice(humanChoice, computerChoice)
    outcome.textContent = 'You Lose :( Scissors Beats Paper!'
    computerScore += 1
  }
  else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    moveChoice(humanChoice, computerChoice)
    outcome.textContent = 'You Win! Scissors Beats Paper!'
    humanScore += 1
  }
  else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    moveChoice(humanChoice, computerChoice)
    outcome.textContent = 'You Win! Rock Beats Scissors!'
    humanScore += 1
  }
  else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    moveChoice(humanChoice, computerChoice)
    outcome.textContent = 'You Lose! :( Rock Beats Scissors!'
    computerScore += 1
  }
  currentScore()
  checkWinner()
}

//Text for moves
const moveChoice = (humanChoice, computerChoice) => {
  humanMoves.textContent = `You chose ${humanChoice}`
  computerMoves.textContent = `Computer chose ${computerChoice}`
}

//Text for score
const currentScore = () => {
  current.classList.remove('hide')
  current.textContent = `Current Score is Player: ${humanScore} - CPU: ${computerScore}`
}

//Final score check with text
const checkWinner = () => {
  if (humanScore == 5 && humanScore > computerScore) {
    current.classList.add('hide')
    humanMoves.classList.add('hide')
    computerMoves.classList.add('hide')
    outcome.classList.add('hide')
    final.classList.remove('hide')
    final.textContent = `You won the game! The score was ${humanScore} - ${computerScore}`
    reload.classList.remove('hide')
    rock.classList.add('hide')
    paper.classList.add('hide')
    scissors.classList.add('hide')
    optionsBtn.forEach(option => {
      option.removeEventListener('click', getHumanChoice);
    })
  }
  else if (computerScore == 5 && humanScore < computerScore) {
    current.classList.add('hide')
    humanMoves.classList.add('hide')
    computerMoves.classList.add('hide')
    outcome.classList.add('hide')
    final.classList.remove('hide')
    final.textContent = `You lost the game :( The score was ${humanScore} - ${computerScore}`
    reload.classList.remove('hide')
    rock.classList.add('hide')
    paper.classList.add('hide')
    scissors.classList.add('hide')
    optionsBtn.forEach(option => {
      option.removeEventListener('click', getHumanChoice);
    })
  }
}
