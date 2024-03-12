const choices = ["rock","paper","scissors"];
let playerPoints=0;
let computerPoints=0;
var gameResults;


function getComputerSelection(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}


function playRound(playerSelection,computerSelection){
    if (playerSelection===computerSelection){
        return "This round was a Tie!";
    }else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper"))
    {
        playerPoints++;
        return "You won this round"
    }else {
        computerPoints++;
        return "You lost this round"
    }
} 

function playGame(){
    for(let i=0;i<5;i++){
        let playerInput= prompt("rock, paper, scissors?");
        let playerSelection = playerInput.toLowerCase();
        let computerSelection =getComputerSelection(choices);
        let results = playRound(playerSelection,computerSelection);
        console.log(results)
    }
    if (playerPoints>computerPoints){
         gameResults= "Congrats you won the game!!!"
    } else if (playerPoints===computerPoints){
         gameResults= "It is tie after 5 rounds"
    } else{
         gameResults= "Computer won the game :( "
    }
}

playGame();
console.log(gameResults)


