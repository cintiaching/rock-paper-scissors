
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
    let gameActive = true; // Track if the game is active
    
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

    const scoreContainer = document.querySelector("div.score")
    const resultContainer = document.querySelector("div.result");
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Game";
    resetButton.style.display = "none"; // Hide initially

    resetButton.addEventListener("click", () => {
        // Reset scores
        humanScore = 0;
        computerScore = 0;

        // Clear round results
        resultContainer.innerHTML = ""; // Clear all results
        scoreContainer.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;

        // Hide reset button
        resetButton.style.display = "none";

        gameActive = true; // Reset game status
    });

    document.body.appendChild(resetButton); // Add reset button to the DOM

    scoreContainer.textContent = `Your score: ${humanScore} | Computer score ${computerScore}`;

    // event listener for button
    const buttons = document.querySelectorAll("button.choice");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (!gameActive) return;

            // play round
            const humanChoice = button.className.split(" ")[1];
            const computerChoice = getComputerChoice();
            result = playRound(humanChoice, computerChoice);

            // update score
            scoreContainer.textContent = `Your score: ${humanScore} | Computer score ${computerScore}`;

            // show round result
            const content = document.createElement("div");
            content.textContent = result;
            resultContainer.appendChild(content);

            if (humanScore >= 5 || computerScore >= 5) {
                // Display the running score
                // and announce a winner of the game once one player reaches 5 points.
                const winner = humanScore >= 5 ? "You win the game!" : "Computer wins the game!";

                const finalResult = document.createElement("div");
                finalResult.textContent = winner;
                resultContainer.appendChild(finalResult);
                
                gameActive = false; // Set game status to inactive
                resetButton.style.display = "block";
                
            }
        });
    });

};

playGame();
