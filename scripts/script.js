let playerScore = 0;
let computerScore = 0;

for (let i = 1; i <= 5; i++) {

    const playerSelection = prompt("Round " + i + "/5: Rock, Paper or Scissors?");
    const computerSelection = computerPlay(Math.floor(Math.random()*3));

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

    playRound(playerSelection.toLowerCase(), computerSelection);

    function playRound(playerSelection, computerSelection) {
        switch (true) {
            case playerSelection == "rock" && computerSelection == "paper":
            case playerSelection == "paper" && computerSelection == "scissors":
            case playerSelection == "scissors" && computerSelection == "rock":
                computerScore++;
                alert("Your selection: " + playerSelection.toLowerCase() + 
                ", Computer's selection: " + computerSelection + 
                "\nYour Score: " + playerScore + 
                ", Computer's score: " + computerScore);
                break;
            case playerSelection == "rock" && computerSelection == "scissors":
            case playerSelection == "paper" && computerSelection == "rock":
            case playerSelection == "scissors" && computerSelection == "paper":
                playerScore++;
                alert("Your selection: " + playerSelection.toLowerCase() + 
                ", Computer's selection: " + computerSelection + 
                "\nYour Score: " + playerScore + 
                ", Computer's score: " + computerScore);
                break;
            case playerSelection == "rock" && computerSelection == "rock":
            case playerSelection == "paper" && computerSelection == "paper":
            case playerSelection == "scissors" && computerSelection == "scissors":
                computerScore++, playerScore++;
                alert("Your selection: " + playerSelection.toLowerCase() + 
                ", Computer's selection: " + computerSelection + 
                "\nYour Score: " + playerScore + 
                ", Computer's score: " + computerScore);
                break;
            default:
                i--;
                alert("Invalid argument");
        }
    }

}

    if (playerScore > computerScore) {
        alert("You've won the game");
    } else if (computerScore > playerScore) {
        alert("You've lost the game");
    } else {
        alert("It's a draw");
    }