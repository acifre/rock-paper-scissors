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

    messageWin = "You win!";
    messageLose = "You lose!";
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
        if (result.includes("You win!")) {
            playerScore++;
        } else if (result.includes("You lose!")) {
            computerScore++;
        }
        console.log(result)
        computerSelection = getComputerChoice()
    }

    return "Player score is: " + playerScore + ". " + "Computer score is: " + computerScore + ".";
}