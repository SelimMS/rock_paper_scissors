const div = document.querySelector('div.options')    
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")    
const scissors = document.querySelector(".scissors")
const humanMoves = document.querySelector('.human')
const computerMoves = document.querySelector('.computer')
const outcome = document.querySelector('.outcome')
const current = document.querySelector('.currentScore')
const final = document.querySelector('.finalScore')
const reload = document.querySelector(".reload")
const optionsBtn = document.querySelectorAll('div.options div');
const playBtn = document.querySelector('.play')
const headerText = document.querySelector('.header p')

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

const playGame = () => {
  rock.classList.remove('hide')
  paper.classList.remove('hide')
  scissors.classList.remove('hide')
  playBtn.classList.add('hide')
  headerText.classList.add('hide')
}

playBtn.addEventListener('click', playGame)

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
    outcome.classList.remove('lose')
    outcome.classList.remove('win')
    outcome.textContent = 'Draw - Play Again!'
  }
  else if (humanChoice === 'paper' && computerChoice === 'rock') {
    moveChoice(humanChoice, computerChoice)
    outcome.textContent = 'You Win! Paper Beats Rock!'
    outcome.classList.remove('lose')
    outcome.classList.add('win')
    humanScore += 1
  }
  else if (humanChoice === 'rock' && computerChoice === 'paper') {
    moveChoice(humanChoice, computerChoice)
    outcome.textContent = 'You Lose - Rock Beats Paper!'
    outcome.classList.remove('win')
    outcome.classList.add('lose')
    computerScore += 1
  }
  else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    moveChoice(humanChoice, computerChoice)
    outcome.textContent = 'You Lose - Scissors Beats Paper!'
    outcome.classList.remove('win')
    outcome.classList.add('lose')
    computerScore += 1
  }
  else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    moveChoice(humanChoice, computerChoice)
    outcome.textContent = 'You Win! Scissors Beats Paper!'
    outcome.classList.remove('lose')
    outcome.classList.add('win')
    humanScore += 1
  }
  else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    moveChoice(humanChoice, computerChoice)
    outcome.textContent = 'You Win! Rock Beats Scissors!'
    outcome.classList.remove('lose')
    outcome.classList.add('win')
    humanScore += 1
  }
  else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    moveChoice(humanChoice, computerChoice)
    outcome.textContent = 'You Lose - Rock Beats Scissors!'
    outcome.classList.remove('win')
    outcome.classList.add('lose')
    computerScore += 1
  }
  currentScore()
  checkWinner()
}

//Text for moves
const moveChoice = (humanChoice, computerChoice) => {
  humanMoves.textContent = `You chose: ${humanChoice}`
  computerMoves.textContent = `CPU chose: ${computerChoice}`
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
    final.classList.add('win')
    final.textContent = `You won the game! The Final Score Was You: ${humanScore} - CPU: ${computerScore}`
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
    final.classList.add('lose')
    final.textContent = `You lost the game :(  The Final Score Was You: ${humanScore} - CPU: ${computerScore}`
    reload.classList.remove('hide')
    rock.classList.add('hide')
    paper.classList.add('hide')
    scissors.classList.add('hide')
    optionsBtn.forEach(option => {
      option.removeEventListener('click', getHumanChoice);
    })
  }
}
