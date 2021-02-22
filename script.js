const choices = document.querySelectorAll('.choice');
const prompt = document.getElementById('prompt');
const score = document.getElementById('score');
const scoreboard = {
    player: 0,
    computer: 0
};

// Event Listeners
choices.forEach(choice => choice.addEventListener('click', play));

function computerPlay(){
    let value = Math.floor(Math.random()*3)+1;
    switch(value){
        case 1: 
            return "rock";
        case 2:
            return "paper";
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

function play(e){
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);
    if(roundResult[4] == "W")
        scoreboard.player++;
    else if(roundResult[4] == "L")
        scoreboard.computer++;
    prompt.textContent = roundResult;
    score.textContent = `${scoreboard.player} - ${scoreboard.computer}`;
    if(scoreboard.player == 5 || scoreboard.computer == 5){
        scoreboard.player = 0;
        scoreboard.computer = 0;
    }
}
