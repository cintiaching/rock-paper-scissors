console.log("Hello World")

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


function getHumanChoice() {
    let choice = prompt("Rock, paper, scissors?");
    return choice
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

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        result = playRound(humanSelection, computerSelection);
        console.log(result)
    } 
}

playGame();

