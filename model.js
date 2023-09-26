function getComputerChoice() {
    let numChoice = Math.floor(Math.random() * 3);
    
    if (numChoice == 0) {
        return "rock";
    }
    if (numChoice == 1) {
        return "paper";
    }
    
    return "scissors";

}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return "You draw. Inconclusive.";
    }

    if (playerSelection === "rock") {
        if (computerSelection == "paper") {
            return "You lose. Paper beats Rock";
        }
        return "You win. Rock beats Scissors";
    }

    if (playerSelection === "paper") {
        if (computerSelection == "scissors") {
            return "You lose. Scissors beats Paper";
        }
        return "You win. Paper beats Rock";
    }

    if (playerSelection === "scissors") {
        if (computerSelection == "rock") {
            return "You lose. Rock beats Scissors";
        }
        return "You win. Scissors beats Paper";
    }
    
}

function game() {
    let matchresult;
    let playerScore = 0;
    let compScore = 0;
    
    for (let i = 0; i < 5; i++) {
        matchresult = playRound(prompt("play rock paper scissors!"), getComputerChoice());
        
        console.log(matchresult);
        charResult = matchresult.charAt(4);
        if (charResult == "l") {
            compScore++;
        }
        if (charResult == "w") {
            playerScore++;
        }
        
    }

    if (playerScore > compScore) {
        console.log("you win!");
    }
     if (playerScore < compScore) {
        console.log("you lose!");
     }
     if (playerScore == compScore) {
        console.log("tie :)");
     }
}