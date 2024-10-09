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

    updateScoreDisplay();
    checkGameOver();
}

function updateScoreDisplay() {
    console.log(`Score You ${humanScore} Computer ${computerScore}`);
}

function checkGameOver() {
    if (humanScore==5) {
        console.log("You won the game by five points")
        resetGame();
    }
    else if (computerScore==5) {
        console.log(`You lost to us by ${computerScore-humanScore} points`);
        resetGame();
    }
}

function resetGame() {
    humanScore=0;
    computerScore=0;
    console.log('the game has been reset');
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