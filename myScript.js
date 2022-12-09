
// Initializing global variables
let playerSelection = 0;
let playerScore = 0;
let computerScore = 0;

// Initializing document variables

const body = document.querySelector("body");
const scoreRow = document.querySelector(".score-row");
const pScoreDiv = document.createElement('div');
const cScoreDiv = document.createElement('div');
const resultDiv = document.createElement('div');
const gameOverDiv = document.createElement('div');

// Player score
pScoreDiv.setAttribute('style', 'color: black; background: white; border: 2px solid blue;'); 
scoreRow.appendChild(pScoreDiv);
pScoreDiv.innerHTML = "Player Score: " + playerScore;
pScoreDiv.classList.add("score-text");

// Computer score
cScoreDiv.setAttribute('style', 'color: black; background: white; border: 2px solid red;'); 
scoreRow.appendChild(cScoreDiv);
cScoreDiv.innerHTML = "Computer Score: " + computerScore;
cScoreDiv.classList.add("score-text");

// Result of each round
body.insertBefore(resultDiv, scoreRow);
resultDiv.setAttribute('style', 'display: flex; justify-content: center; align-items: center;')
resultDiv.classList.add("result");

// Game over
gameOverDiv.setAttribute('style', 'color: black; border: 2px solid blue;');
body.appendChild(gameOverDiv);
gameOverDiv.innerHTML = "";


// Setting event listener for each choice button

const choices = document.querySelectorAll('.choice');

// Adding an event listener to each choice in the nodelist (choices)

console.log(choices)

choices.forEach((choice) => {

    choice.addEventListener('click', () => {
        choice.classList.add("picked");
        playerSelection = getPlayerChoice(choice.textContent);
        computerSelection = getComputerChoice();
        
        roundResult = playRound(playerSelection, computerSelection);
    
        checkResult(roundResult);
        pScoreDiv.innerHTML = "Player Score: " + playerScore;
        cScoreDiv.innerHTML = "Computer Score: " + computerScore;
        resultDiv.innerHTML = roundResult;
        
    
        if (playerScore >= 5) {
            gameOverDiv.innerHTML = "Game Over: Player wins!"
            alert(gameOverDiv.innerHTML)
            resetScores();
            resetText();
        } else if (computerScore >= 5) {
            gameOverDiv.innerHTML = "Game Over: Computer wins!"
            alert(gameOverDiv.innerHTML)
            resetScores();
            resetText();
        }
        
    });
});

// Remove 
choices.forEach(choice => choice.addEventListener('transitionend', removeTransition))

gameOverDiv.addEventListener()


// Functions -------------------------------------

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('picked');
}

function getComputerChoice() {
    min = 0;
    max = 2;
    return random = Math.floor(Math.random() * (max - min + 1) + min);
    /* random === 0 ? "Rock" : random === 1 ? "Paper" : "Scissors";
    */
}

function getPlayerChoice(input) {
    lower = input.toLowerCase().trim();
    console.log(lower)
    return lower === "rock" ? 0 : lower === "paper" ? 1 : 2;

}

function playRound(playerSelection, computerSelection) {

    messageWin = "You win:";
    messageLose = "You lose:";
    messageTie = "It's a tie!";
    rockBeatScissor = "Rock beats Scissors!";
    paperBeatsRock = "Paper beats Rock!";
    scissorBeatsPaper = "Scissor beats Paper!";


    if (playerSelection == 0 && computerSelection == 2) {
        return messageWin.concat(" ", rockBeatScissor);
    } else if (playerSelection == 1 && computerSelection == 0) {
        return messageWin.concat(" ", paperBeatsRock);
    } else if (playerSelection == 2 && computerSelection == 1) {
        return messageWin.concat(" ", scissorBeatsPaper);
    } else if (computerSelection == 0 && playerSelection == 2) {
        return messageLose.concat(" ", rockBeatScissor);
    } else if (computerSelection == 1 && playerSelection == 0) {
        return messageLose.concat(" ", paperBeatsRock);
    } else if (computerSelection == 2 && playerSelection == 1) {
        return messageLose.concat(" ", scissorBeatsPaper);
    } else if (computerSelection == playerSelection) {
        return messageTie; 
    }
}

function checkResult(result) {
    if (result.includes("You win:")) {
        ++playerScore;
    } else if (result.includes("You lose:")) {
        ++computerScore;
    }
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
    gameOverDiv.innerHTML = "";
}

function resetText() {
    pScoreDiv.innerHTML = "Player Score: " + playerScore;
    cScoreDiv.innerHTML = "Computer Score: " + computerScore;
    resultDiv.innerHTML = "";
}