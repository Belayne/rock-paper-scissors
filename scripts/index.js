
const MOVES = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    let computerMove = MOVES[Math.floor(Math.random() * 3)];
    return computerMove;
}
