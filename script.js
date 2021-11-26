
function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor((Math.random() * 3) + 0)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // Geared Towards Player
    // return 1 if player wins
    // returns -1 if computer wins
    if (playerSelection == computerSelection) {
        console.log("Draw: Both picked " + playerSelection);
        return 0;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You Lose! Paper beats Rock");
        return -1;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You Win! Rock beats Scissors");
        return 1;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beats rock!");
        return 1;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats paper!");
        return -1;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You Win! Scissors beats paper!");
        return 1;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats scissors!");
        return -1;
    } else {
        return 0;
    }
}


function determineWinner(playerWins, computerWins) {
    if (playerWins > computerWins) {
        console.log("YOU HAVE WON! Score: " + playerWins + ":" + computerWins);
    } else if (computerWins > playerWins) {
        console.log("YOU HAVE LOST! Score: " + playerWins + ":" + computerWins);
    } else {
        console.log("DRAW! Score: " + playerWins + ":" + computerWins);
    }
}

function game() {
    // Round Winner Counter
    let playerWins = 0;
    let computerWins = 0;

    // Representation of 3 rounds
    for(let i = 1; i < 4; i++) {
        const computerSelection = computerPlay(); 
        const playerSelection = prompt("Enter Your Move");
        console.log("Round: " + i);

        // Get Results
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult == 1) {
            playerWins++;
        } else if (roundResult == -1) {
            computerWins++;
        }
    }
    // Prints Out Winner
    determineWinner(playerWins, computerWins);
}
// Play Game
game();
