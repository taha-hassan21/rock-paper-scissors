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
    if (humanChoice==computerChoice) {
        displayScore.textContent="It's a draw";
    }
    else if (
        (humanChoice=='rock' && computerChoice=='scissors')||
        (humanChoice=='scissors' && computerChoice=='paper') ||
        (humanChoice=='paper' && computerChoice=='rock')
    ) {
        humanScore++;
        displayScore.textContent=`You win, ${humanChoice} beats ${computerChoice}`;
    }
    else {
        computerScore++;
        displayScore.textContent=`You lose, ${computerChoice} beats ${humanChoice}`;
    }

    updateScoreDisplay();
    checkGameOver();
}

function updateScoreDisplay() {
    displayResults.textContent=`Score You ${humanScore} Computer ${computerScore}`;
}

function checkGameOver() {
    if (humanScore==5) {
        displayResults.textContent=`You won the game by five points`;
        resetGame();
    }
    else if (computerScore==5) {
        displayScore.textContent=`You lost to us by ${computerScore-humanScore} points in 5 rounds`;
        resetGame();
    }
}

function resetGame() {
    humanScore=0;
    computerScore=0;
    displayResults.textContent=`the game has been reset`;
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

let displayResults=document.querySelector('#score');
let displayScore=document.querySelector('#result');
