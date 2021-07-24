function playRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection == "rock" && computerSelection == "paper":
        case playerSelection == "paper" && computerSelection == "scissors":
        case playerSelection == "scissors" && computerSelection == "rock":
            return "Result: You lost";
            break;
        case playerSelection == "rock" && computerSelection == "scissors":
        case playerSelection == "paper" && computerSelection == "rock":
        case playerSelection == "scissors" && computerSelection == "paper":
            return "Result: You won";
            break;
        case playerSelection == "rock" && computerSelection == "rock":
        case playerSelection == "paper" && computerSelection == "paper":
        case playerSelection == "scissors" && computerSelection == "scissors":
            return "Result: It's a tie";
            break;
        default:
            return "Result: Invalid argument";
    }
}

function computerPlay(x) {
    switch(x) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
    }
}

const playerSelection = prompt("Rock, Paper or Scissors?");
const computerSelection = computerPlay(Math.floor(Math.random()*3));
console.log("Your selection: " + playerSelection.toLowerCase());
console.log("Computer's selection: " + computerSelection);
console.log(playRound(playerSelection.toLowerCase(), computerSelection));