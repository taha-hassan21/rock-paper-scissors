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

function getHumanChoice() {
    let ans=prompt("Enter a valid choice:");

    if (ans.toLowerCase()!=='rock' && ans.toLowerCase()!=='paper' && ans.toLowerCase()!=='scissors') {
        return "Enter rock, paper or scissors only";
    }
    else {
        return ans;
    }
}