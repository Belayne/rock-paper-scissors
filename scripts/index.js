
const MOVES = ["ROCK", "PAPER", "SCISSORS"];
const inputMessage = "Rock! Paper! Scissors!\n\nType your choice."
const invalidInput = "Try again\n\nYou can only input rock, paper or scissors."

function getComputerChoice() {
    let computerChoice = MOVES[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function getUserChoice() {
    let userChoice = prompt(inputMessage).toUpperCase();

    while(!checkInput(userChoice)) {
        alert(invalidInput);
        userChoice = prompt(inputMessage).toUpperCase();
    }
    return userChoice;
}

function checkInput(userChoice) {
    let valid = MOVES.includes(userChoice);
    return valid;
}

console.log(getUserChoice());
