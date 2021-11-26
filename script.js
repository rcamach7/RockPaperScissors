
function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor((Math.random() * 3) + 0)];
}

let playerWins = 0;
let computerWins = 0;
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let resultInText = "";
    if (playerSelection == computerSelection) {
        resultInText = "Draw: Both picked " + playerSelection;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        resultInText = "You Lose round! Paper beats Rock";
        computerWins++;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        resultInText = "You Win round! Rock beats Scissors";
        playerWins++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        resultInText = "You Win round! Paper beats rock!";
        playerWins++;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        resultInText = "You lose round! Scissors beats paper!";
        computerWins++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        resultInText = "You Win round! Scissors beats paper!";
        playerWins++;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        resultInText = "You lose round! Rock beats scissors!";
        computerWins++;
    } else {
        resultInText = "ERROR";
    }
    // Print current score in the console
    let score = "\n\nCurrent Score: Player: " + playerWins + " Computer: " + computerWins + "\n\n";

    // Print score and moves in the player console / website
    const playerConsoleResult = this.document.getElementById("roundResult").textContent = resultInText;
    const playerConsoleScore = this.document.getElementById("currentScore").textContent = score;

    // Check to see if there is a winner!
    checkIfWinner();
}

function checkIfWinner() {
    if (playerWins == 5 ) {
        alert("YOU WIN! CONGRATS!");
        location.reload(true);
    } else if (computerWins == 5) {
        alert("YOU HAVE LOST! COMPUTER WINS");
        location.reload(true);
    }
}

// We are adding a event listener to our button "rock", if clicked we simulate a round between user and player 
const rockBtn = this.document.getElementById("rock")
rockBtn.addEventListener("click", () =>  playRound("rock", computerPlay()) );

const paperBtn = this.document.getElementById("paper");
paperBtn.addEventListener("click", () =>  playRound("paper", computerPlay()) );

const scissorsBtn = this.document.getElementById("scissors");
scissorsBtn.addEventListener("click", () =>  playRound("scissors", computerPlay()) );
