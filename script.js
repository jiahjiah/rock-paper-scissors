const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playAgain = document.querySelector(".playAgain");

const endContainer = document.querySelector(".endContainer");
const container = document.querySelector(".container");

const player = document.querySelector("#player");
const computer = document.querySelector("#computer");

const statusDiv = document.querySelector(".status");

let winner = '';
let playerScore = 0;
let computerScore = 0;



function getComputerChoice() {
    // chooses a random number from 0 to 2, inclusive
    let choice = Math.floor(Math.random() * 3);

    switch(choice) {
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
    }
}

function playRound(playerSelection, computerSelection) {

    let newPlayerSelection = playerSelection.toLowerCase();

    if (newPlayerSelection == computerSelection) {
        winner = "tie";
    } else if ((newPlayerSelection == "rock" && computerSelection == "scissors") ||
                (newPlayerSelection == "scissors" && computerSelection == "paper") ||
                (newPlayerSelection == "paper" && computerSelection == "rock")) {
        playerScore++;
        winner = "player";
    } else {
        computerScore++;
        winner = "computer";
    }
}


function handleClick(playerChoice) {
    let computerChoice = getComputerChoice();

    playRound(playerChoice, computerChoice);

    if (playerScore == 5) {
        statusDiv.innerText =  "You beat the computer!"
        showEndScreen();
    } else if (computerScore == 5) {
        statusDiv.innerText =  "The computer beat you!"
        showEndScreen();
    } else if (winner == "tie") {
        console.log(`The computer chose ${computerChoice}. You tied! Play again ;3`)
        statusDiv.innerText = `The computer chose ${computerChoice}. You tied! Play again ;3`;
    } else if (winner == "player") {
        statusDiv.innerText = `The computer chose ${computerChoice}. You won!`;
        console.log(`The computer chose ${computerChoice}. You won!`)
    } else {
        statusDiv.innerText = `The computer chose ${computerChoice}. You lost!`;
        console.log(`The computer chose ${computerChoice}. You lost!`)
    }

    player.innerText = `Player: ${playerScore}`;
    computer.innerText = `Computer: ${computerScore}`;
}


function reset() {
    playerScore = 0;
    computerScore = 0;
    statusDiv.innerText = "First to 5 points wins!";
    player.innerText = `Player: ${playerScore}`;
    computer.innerText = `Computer: ${computerScore}`;

    endContainer.style.opacity = 0;
    container.style.opacity = 100;

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

    playAgain.disabled = true;
}

function showEndScreen() {
    container.style.opacity = 0;
    endContainer.style.opacity = 100;

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    playAgain.disabled = false;
}


rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors")); 
playAgain.addEventListener("click", reset); 
