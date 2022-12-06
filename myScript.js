function getComputerChoice() {
    min = 0;
    max = 2;
    random = Math.floor(Math.random() * (max - min + 1) + min);
    return random === 0 ? "Rock" : random === 1 ? "Paper" : "Scissors";

}

function getPlayerChoice(choice) {
    lower = choice.toLowerCase().trim();
    console.log(lower)
    return lower === "rock" ? 0 : lower === "paper" ? 1 : 2;

}