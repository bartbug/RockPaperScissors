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
const results = document.querySelector("#results");
const buttons = document.querySelectorAll('button');
const score = document.createElement("h2");
const gameMessage = document.createElement("p");

results.appendChild(gameMessage);
results.appendChild(score);

let matchresult;
let playerScore = 0;
let compScore = 0;

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        matchresult = playRound(button.id, getComputerChoice());
    

        let charResult = matchresult.charAt(4);
        if (charResult == "l") {
            compScore++;
        }
        if (charResult == "w") {
            playerScore++;
        }
    
        gameMessage.textContent = matchresult;
        score.textContent = "Your score: " + playerScore + " Computer score: " + compScore;
        if (playerScore == 5) {
            score.textContent = "You win!";
        }
        if (compScore == 5) {
            score.textContent = "You lose!";
        }
    });

});

