
const MOVES = ["ROCK", "PAPER", "SCISSORS"];

const playerBtns = document.querySelectorAll('button');
const resultDiv = document.querySelector('div.result-div');

playerBtns.forEach(
    btn => btn.addEventListener("mousedown",playRound)
    );

function getComputerChoice() {
    let computerChoice = MOVES[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function getUserChoice(e) {
    let userChoice = prompt(INPUT_MESSAGE).toUpperCase();

    while(!checkInput(userChoice)) {
        alert(INVALID_INPUT);
        userChoice = prompt(INPUT_MESSAGE).toUpperCase();
    }
    return userChoice;
}

function checkInput(userChoice) {
    let valid = MOVES.includes(userChoice);
    return valid;
}

function drawDiv(text) {
    resultDiv.textContent = text;
}

//Return
//0: Draw
//1: Win
//2: Lose
function playRound(e) {
    let playerSelection = this.getAttribute('data-selection');
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        let resultText = `Draw! You both put ${playerSelection}.`;
        drawDiv(resultText);
        return 0;
    }

    switch(playerSelection) {
        case "ROCK": {
            if(computerSelection === "SCISSORS") {
                let resultText = `You Win! ${playerSelection} beats ${computerSelection}.`;
                drawDiv(resultText);
                return 1;
            }
            else {
                let resultText = `You Lose! ${computerSelection} beats ${playerSelection}.`;
                drawDiv(resultText);
                return 2;
            }
        }
        case "SCISSORS": {
            if(computerSelection === "PAPER") {
                let resultText = `You Win! ${playerSelection} beats ${computerSelection}.`;
                drawDiv(resultText);
                return 1;
            }
            else {
                let resultText = `You Lose! ${computerSelection} beats ${playerSelection}.`;
                drawDiv(resultText);
                return 2;
            }
        }
        case "PAPER": {
            if(computerSelection === "ROCK") {
                let resultText = `You Win! ${playerSelection} beats ${computerSelection}.`;
                drawDiv(resultText);
                return 1;
            }
            else {
                let resultText = `You Lose! ${computerSelection} beats ${playerSelection}.`;
                drawDiv(resultText);
                return 2;
            }
        }
    }
}

function game(numberOfGames) {
    let winCount = 0;
    let loseCount = 0;
    let drawCount = 0;
    
    for(let i = 0; i < numberOfGames; i++) {
        let roundWinner = playRound();

        if(roundWinner == 0) drawCount++;

        if(roundWinner == 1) winCount++;
        
        if(roundWinner == 2) loseCount++;
    }

    if(winCount == loseCount) {
        alert(`Draw! You won ${winCount} times, drawed ${drawCount} times and lost ${loseCount} times.`);
        return 0;
    }
    if(winCount > loseCount) {
        alert(`Winner! You won ${winCount} times, drawed ${drawCount} times and lost ${loseCount} times.`);
        return 1;
    }
    else {
        alert(`Loser! You lost ${loseCount} times, drawed ${drawCount} times and won ${winCount} times.`);
        return 2;
    }
}



