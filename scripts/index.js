
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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Draw! You both put ${playerSelection}.`;
    }

    switch(playerSelection) {
        case "ROCK": {
                if(computerSelection === "SCISSORS") {
                    return `You Win! ${playerSelection} beats ${computerSelection}.`
                }
                else return `You Lose! ${computerSelection} beats ${playerSelection}.`
        }
        case "SCISSORS": {
            if(computerSelection === "PAPER") {
                return `You Win! ${playerSelection} beats ${computerSelection}.`
            }
            else return `You Lose! ${computerSelection} beats ${playerSelection}.`
        }
        case "PAPER": {
            if(computerSelection === "ROCK") {
                return `You Win! ${playerSelection} beats ${computerSelection}.`
            }
            else return `You Lose! ${computerSelection} beats ${playerSelection}.`
        }
    }
}

let playerSelection = getUserChoice();
let computerSelection = getComputerChoice();


console.log(playRound(playerSelection, computerSelection))
