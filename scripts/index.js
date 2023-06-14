
const MOVES = ["ROCK", "PAPER", "SCISSORS"];
const INPUT_MESSAGE = "Rock! Paper! Scissors!\n\nType your choice."
const INVALID_INPUT = "Try again\n\nYou can only input rock, paper or scissors."

function getComputerChoice() {
    let computerChoice = MOVES[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function getUserChoice() {
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

//Return
//0: Draw
//1: Win
//2: Lose
function playRound() {
    let playerSelection = getUserChoice();
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        alert(`Draw! You both put ${playerSelection}.`)
        return 0;
    }

    switch(playerSelection) {
        case "ROCK": {
            if(computerSelection === "SCISSORS") {
                alert(`You Win! ${playerSelection} beats ${computerSelection}.`);
                return 1;
            }
            else {
                alert(`You Lose! ${computerSelection} beats ${playerSelection}.`)
                return 2;
            }
        }
        case "SCISSORS": {
            if(computerSelection === "PAPER") {
                alert(`You Win! ${playerSelection} beats ${computerSelection}.`);
                return 1;
            }
            else {
                alert(`You Lose! ${computerSelection} beats ${playerSelection}.`)
                return 2;
            }
        }
        case "PAPER": {
            if(computerSelection === "ROCK") {
                alert(`You Win! ${playerSelection} beats ${computerSelection}.`);
                return 1;
            }
            else {
                alert(`You Lose! ${computerSelection} beats ${playerSelection}.`)
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



