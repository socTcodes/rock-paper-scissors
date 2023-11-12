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
function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    }   else if (randomNumber === 1) {
        return "paper";
    }   else {
        return "scrissors";
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
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }   else {
        return `You lose! ${playerSelection} beats ${computerSelection}!`;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));