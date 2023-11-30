let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie! ";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

function game(userChoice) {
    if (["rock", "paper", "scissors"].includes(userChoice)) {
        let computerChoice = getComputerChoice();

        let result = playRound(userChoice, computerChoice);

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
        
        if (playerScore === 5 || computerScore === 5) {
            disableButtons();
        }

        results.textContent = result;
        results.textContent += ` Player score: ${playerScore} - Computer score: ${computerScore}`;

        if (playerScore === 5) {
            results.textContent = "You won the game!";
            disableButtons();
        } else if (computerScore === 5) {
            results.textContent = "Computer won the game!";
            disableButtons();
        }
    } else {
        results.textContent = "Invalid choice. Please enter rock, paper, or scissors.";
    }
} 

function disableButtons() {
    rock.removeEventListener('click', rockClickHandler);
    paper.removeEventListener('click', paperClickHandler);
    scissors.removeEventListener('click', scissorsClickHandler);
}

function rockClickHandler() {
    game('rock');
}

function paperClickHandler() {
    game('paper');
}

function scissorsClickHandler() {
    game('scissors');
}

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const results = document.getElementById('results');

rock.addEventListener('click', rockClickHandler);
paper.addEventListener('click', paperClickHandler);
scissors.addEventListener('click', scissorsClickHandler);