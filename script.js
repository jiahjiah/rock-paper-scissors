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
        return "tied"
    } else if ((newPlayerSelection == "rock" && computerSelection == "scissors") ||
                (newPlayerSelection == "scissors" && computerSelection == "paper") ||
                (newPlayerSelection == "paper" && computerSelection == "rock")) {
        return "player"
    } else {
        return "computer"
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {
        let playerSelection = prompt("Please enter your selection: rock, paper, or scissors?");
        console.log(`You chose chose: ${playerSelection}.`)


        let computerSelection = getComputerChoice();

        console.log(`Computer chose: ${computerSelection}.`)

        let winner = playRound(playerSelection, computerSelection);

        if (winner == "tied") {
            console.log(`You tied! Play again ;3`)
            break;
        } else if (winner == "player") {
            playerScore++;
            console.log(`You won!`)
        } else {
            computerScore++;
            console.log("You lost!")
        }

        console.log(`Current Score: You: ${playerScore}, Computer: ${computerScore}`);
    }

    if (playerScore == 3) {
        console.log(`The winner is: You!`);
    } else {
        console.log(`The winner is: the Computer!`);
    }
}

game();