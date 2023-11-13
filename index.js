/*
Create a function named getComputerChoice
getComputerChoice should return rock, paper, or scissors
Write a function that plays one round, it should have two parameters. playerSelection and computerSelection
It should also return a string that declares a winner 
Make playerSelection parameter input case in-sensistive
Create a new function game() and add the previous made function into it that creates a 5 round game, keeps score, and declares a winner
Call your playRound() function 5 times
Use console.log to display the results of each round and the winner
Use prompt to get input from user
*/
let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    }   else if (randomNumber === 1) {
        return "paper";
    }   else {
        return "scissors";
    }
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }   else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock") 
    )   {
        playerScore++
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }   else {
        computerScore++
        return `You lose! ${playerSelection} beats ${computerSelection}!`;
    }
}

function game() {
    while (playerScore < 5 && computerScore < 5) {
        let userInput = prompt("rock, paper, or scissors?");
        userInput = userInput.toLowerCase();

        if (["rock", "paper", "scissors"].includes(userInput)) {
            let computerChoice = getComputerChoice();
            console.log(playRound(userInput, computerChoice));
            console.log(`Player Score: ${playerScore} - Computer Score: ${computerScore}`);
        } else {
            console.log("Invalid choice. Please enter rock, paper, or scissors.");
        }
    }

    if (playerScore === 5) {
        alert("You won the game!");
    } else {
        alert("Computer won the game!");
    }
}

game();