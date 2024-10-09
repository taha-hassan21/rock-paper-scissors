let humanScore=0;
let computerScore=0;

function getComputerChoice() {
    let x=Math.floor(Math.random() * 3);
    if (x==0) {
        return "rock";
    }
    else if (x==1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice==='rock' && computerChoice==='scissors') {
        humanScore++;
        console.log("You win, rock beats scissors");
    }
    else if (humanChoice==='scissors' && computerChoice==='rock') {
        computerScore++;
        console.log("You lose, rock beats scissors");
    }
    else if (humanChoice==='paper' && computerChoice==='rock') {
        humanScore++;
        console.log("Your win, paper beats rock");
    }
    else if (humanChoice==='rock' && computerChoice==='paper') {
        computerScore++;
        console.log("You lose, paper beats rock");
    }
    else if (humanChoice==='scissors' && computerChoice==='paper') {
        humanScore++;
        console.log("You win, scissors beats paper");
    }
    else if (humanChoice==='paper' && computerChoice==='scissors') {
        computerScore++;
        console.log("You lose, scissors beats paper");
    }
    else {
        console.log("It's a draw");
    }

    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());

    if (humanScore>computerScore) {
        console.log(`You Won by ${humanScore} to ${computerScore}`);
    }
    else if (computerScore>humanScore) {
        console.log(`You lost by ${humanScore} to ${computerScore}`);
    }
    else {
        console.log(`It's a draw by ${humanScore} to ${computerScore}`);
    }
}

// creating even handlers for each button

let menu=document.querySelector('#menu');

menu.addEventListener('click', (event)=>{
    let target=event.target;

    switch(target.id) {
        case 'rock':
            playRound('rock', getComputerChoice());
            break;
        case 'paper':
            playRound('paper', getComputerChoice());
            break;
        case 'scissors':
            playRound('scissors', getComputerChoice());
            break;
    }
});