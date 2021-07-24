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

    function playRound(a, b) {
        switch (true) {
            case a == "rock" && b == "paper":
            case a == "paper" && b == "scissors":
            case a == "scissors" && b == "rock":
                computerScore++;
                alert("Your selection: " + a + 
                ", Computer's selection: " + b + 
                "\nYour Score: " + playerScore + 
                ", Computer's score: " + computerScore);
                break;
            case a == "rock" && b == "scissors":
            case a == "paper" && b == "rock":
            case a == "scissors" && b == "paper":
                playerScore++;
                alert("Your selection: " + a + 
                ", Computer's selection: " + b + 
                "\nYour Score: " + playerScore + 
                ", Computer's score: " + computerScore);
                break;
            case a == "rock" && b == "rock":
            case a == "paper" && b == "paper":
            case a == "scissors" && b == "scissors":
                computerScore++, playerScore++;
                alert("Your selection: " + a + 
                ", Computer's selection: " + b + 
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