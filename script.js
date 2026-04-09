// Game intro message
console.log('Rock...Paper..Scissors..')
console.log('Best of 5 wins!')

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
  let choice = prompt("Enter 'rock', 'paper' or 'scissors").toLowerCase().trim()
  // If choice is invalid, asks to choose again
  while(choice != 'rock' && choice != 'paper' && choice !='scissors') {
    console.log('Invalid input try again')
    choice = prompt("Enter 'rock', 'paper' or 'scissors'").toLowerCase().trim()
  }
  return choice.toLowerCase().trim()
}


const playGame = () => {
  // Initialising Scores
  let humanScore = 0
  let computerScore = 0
  // Logic for 1 round of game
  const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
      console.log(`Computer chose ${computerChoice}`)
      console.log(`You chose ${humanChoice}`)
      console.log('Draw, play again')
      // Recall the PlayRound function for a draw scenario
      playRound(getHumanChoice(), getComputerChoice())
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
  }
  // Loop for 5 games or 3 wins
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice())
    if (humanScore == 3 || computerScore == 3) {
      break;
    }
  }
  
  if (humanScore > computerScore) {
    console.log(`You won the game! The score was ${humanScore} - ${computerScore}`)
  }
  else if (humanScore < computerScore) {
    console.log(`You lost the game :( The score was ${humanScore} - ${computerScore}`)
  }
  else {
    console.log(`The game was a draw! The score was ${humanScore} - ${computerScore}`)
  }
}

console.log(playGame())
