//TODO: Display the running score, and announce a winner of the game once one player reaches 5 points.


const MOVES = ["ROCK", "PAPER", "SCISSORS"];

const playerBtns = document.querySelectorAll('button');
const resultDiv = document.querySelector('div.result-div');
const playerScoreSpan = document.querySelector('p.player-score span');
const computerScoreSpan = document.querySelector('p.computer-score span');

let computerWins = 0;
let playerWins = 0;

startGame();

function startGame() {
    playerBtns.forEach(
        btn => btn.addEventListener("mousedown",playRound)
        );
}

function stopGame() {
    playerBtns.forEach(
        btn => btn.removeEventListener("mousedown",playRound)
        );
}

function getComputerChoice() {
    let computerChoice = MOVES[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function drawDiv(text) {
    resultDiv.textContent = text;
}

function updateScore(result) {
    if(result == 1) {
        playerWins++;
    }
    else if(result == 2) {
        computerWins++;
    }
    drawScore();
    checkWin();
}

function drawScore() {
    playerScoreSpan.textContent = `${playerWins}`;
    computerScoreSpan.textContent = `${computerWins}`
}

function checkWin() {
    if(playerWins == 5 || computerWins == 5) {
        let text = (playerWins > computerWins)? "You Won! Congratulations.": "You Lost! Better luck next time."
        drawDiv(text)
        stopGame();
    }
}

//Return
//0: Draw
//1: Win
//2: Lose
function playRound(e) {
    let playerSelection = this.getAttribute('data-selection');
    let computerSelection = getComputerChoice();
    let result;

    if (playerSelection === computerSelection) {
        let resultText = `Draw! You both put ${playerSelection}.`;
        drawDiv(resultText);
        result = 0;
    }

    else {

        switch(playerSelection) {
            case "ROCK": {
                if(computerSelection === "SCISSORS") {
                    let resultText = `You Win! ${playerSelection} beats ${computerSelection}.`;
                    drawDiv(resultText);
                    result = 1;
                    break;
                }
                else {
                    let resultText = `You Lose! ${computerSelection} beats ${playerSelection}.`;
                    drawDiv(resultText);
                    result = 2;
                    break;
                }
            }
            case "SCISSORS": {
                if(computerSelection === "PAPER") {
                    let resultText = `You Win! ${playerSelection} beats ${computerSelection}.`;
                    drawDiv(resultText);
                    result = 1;
                    break;
                }
                else {
                    let resultText = `You Lose! ${computerSelection} beats ${playerSelection}.`;
                    drawDiv(resultText);
                    result = 2;
                    break;
                }
            }
            case "PAPER": {
                if(computerSelection === "ROCK") {
                    let resultText = `You Win! ${playerSelection} beats ${computerSelection}.`;
                    drawDiv(resultText);
                    result = 1;
                    break;
                }
                else {
                    let resultText = `You Lose! ${computerSelection} beats ${playerSelection}.`;
                    drawDiv(resultText);
                    result = 2;
                    break;
                }
            }
        }
    }

    updateScore(result);
}




