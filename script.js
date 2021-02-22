function computerPlay(){
    let value = Math.floor(Math.random()*3)+1;
    switch(value){
        case 1: 
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        default:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection)
        return "Tie!";
    else if(playerSelection === "rock" && computerSelection === "paper")
        return "You Lose! Paper beats Rock";
    else if(playerSelection === "paper" && computerSelection === "rock")
        return "You Win! Paper beats Rock";
    else if(playerSelection === "rock" && computerSelection === "scissors")
        return "You Win! Rock beats Scissors";
    else if(playerSelection === "scissors" && computerSelection === "rock")
        return "You Lose! Rock beats Scissors";
    else if(playerSelection === "paper" && computerSelection === "scissors")
        return "You Lose! Scissors beats Paper";
    else if(playerSelection === "scissors" && computerSelection === "paper")
        return"You Win! Scissors beats Paper";
    else
        console.log("WRONG INPUT!");
}

function game(){
    let playerSelection;
    let computerSelection;
    let result;
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore <5 && computerScore<5){
        playerSelection =  prompt("Your Turn!: ");
        playerSelection = playerSelection.toLowerCase();
        computerSelection =  computerPlay();
        result = playRound(playerSelection, computerSelection);
        if(result[4] == "L"){
            computerScore ++;
            console.log("Computer Wins this Round!");
        }
        else if(result[4] == "W"){
            playerScore ++;
            console.log("Player Wins this Round!");
        }
        else{
            console.log("Tie!");
        }
    }

    console.log("GAME OVER! "+playerScore<5? "Computer":"Player"+" Wins!");
}

game();