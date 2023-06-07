
const MOVES = ["ROCK", "PAPER", "SCISSORS"];
const inputMessage = "Rock! Paper! Scissors!\nType your choice"

function getComputerChoice() {
    let computerChoice = MOVES[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function getUserChoice() {
    let userChoice = prompt(inputMessage).toUpperCase();
    return userChoice;
}

console.log(getUserChoice());
