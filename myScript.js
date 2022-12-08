
// Initializing global variables
let playerSelection = 0;
let playerScore = 0;
let computerScore = 0;

// Initializing document variables

const body = document.querySelector("body");
const scoreRow = document.querySelector(".score-row");

// Setting event listener for each choice button

const choices = document.querySelectorAll('.choice');

const pScoreDiv = document.createElement('div');
const cScoreDiv = document.createElement('div');
const resultDiv = document.createElement('div');
const gameOverDiv = document.createElement('div');


pScoreDiv.setAttribute('style', 'color: black; background: white; border: 2px solid blue;'); 
scoreRow.appendChild(pScoreDiv);
pScoreDiv.innerHTML = "Player Score: " + playerScore;
pScoreDiv.classList.add("score-text");

cScoreDiv.setAttribute('style', 'color: black; background: white; border: 2px solid red;'); 
scoreRow.appendChild(cScoreDiv);
cScoreDiv.innerHTML = "Computer Score: " + computerScore;
cScoreDiv.classList.add("score-text");

body.insertBefore(resultDiv, scoreRow);
resultDiv.setAttribute('style', 'display: flex; justify-content: center; align-items: center;')
resultDiv.classList.add("result");


//resultDiv.textContent = roundResult;
//console.log(resultDiv)

//scoreRow.appendChild(resultDiv);

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
    
        console.log(roundResult);
        console.log(playerScore);
        console.log(computerScore);
        
    
        if (playerScore >= 5 || computerScore >= 5) {
            alert("Game Over");
            resetScores();
        }
        
    });
});

choices.forEach(choice => choice.addEventListener('transitionend', removeTransition))






// if player score or computer score reaches 5, reset scores and send out alert


// functions

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

function game(playerSelection, computerSelection) {

    let playerScore = 0;
    let computerScore = 0; 

    for (let i = 0; i < 5; i++) {
        result = playRound(playerSelection, computerSelection);
        if (result.includes("You win:")) {
            playerScore++;
        } else if (result.includes("You lose:")) {
            computerScore++;
        }
        console.log(result)
        
    }

    return "Player score is: " + playerScore + ". " + "Computer score is: " + computerScore + ".";
}

function checkResult(result) {
    if (result.includes("You win:")) {
        ++playerScore;
    } else if (result.includes("You lose:")) {
        ++computerScore;
    }
}

function createTracker(result, playerScore, computerScore) {
    console.log(result);



}

function playGame(playerInput) {
    playerSelection = getPlayerChoice(playerInput.textContent);
    computerSelection = getComputerChoice()
    
    roundResult = playRound(playerSelection, computerSelection);

    checkResult(roundResult);

    console.log(roundResult);
    console.log(playerScore);
    console.log(computerScore);
    

    if (playerScore >= 5 || computerScore >= 5) {
        alert("Game Over");
        playerScore = 0;
        computerScore = 0;
    }
}


function resetScores() {
    playerScore = 0;
    computerScore = 0;
}