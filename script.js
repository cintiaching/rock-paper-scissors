
function getComputerChoice() {
    rand = Math.random();
    if (rand < 0.33) {
        return "rock"
    } else if (rand > 0.66) {
        return "papar"
    } else {
        return "scissors"
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            humanScore += 1
            return `You win! ${humanChoice} beats ${computerChoice}`;
        } else {
            computerScore += 1
            return `You lose! ${humanChoice} beats ${computerChoice}`;
        }

    }

    // event listener for button
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log(button.className)
            const humanChoice = button.className;
            const computerChoice = getComputerChoice();
            result = playRound(humanChoice, computerChoice)
            console.log(result)

            console.log(humanScore, computerScore)
            if (humanScore >= 5 || computerScore >= 5) {
                // Display the running score
                // and announce a winner of the game once one player reaches 5 points.
                console.log(humanScore, computerScore)
            }
        });
    });

};

playGame();
