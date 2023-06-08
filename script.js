let rules = ["Rock", "Paper", "Scissor"];

let getComputerChoice = () => {
    let index = Math.floor(Math.random() * 10) % rules.length;
    return rules[index];
}

let getHumanChoice = () => {
    let choice;
    do {
        choice = Number(prompt("Enter your choice: \n1. Rock \n2. Paper \n3. Scissor"));
    }
    while (choice > 3 || choice < 1);

    return rules[--choice];
}


let conditions = (playerselection, computerselection) => {
    if (playerselection == computerselection)
        return 0;
    if (playerselection == "Rock" && computerselection == "Scissor" || playerselection == "Paper" && computerselection == "Rock" || playerselection == "Scissor" && computerselection == "Paper")
        return 1;
    else
        return -1;
}

let playRound = () => {
    let playerselection = getHumanChoice();
    let computerselection = getComputerChoice();
    return conditions(playerselection,computerselection);
}

let Game=()=>{
    let rounds=5,playerCount=0,compCount=0;
    for (let index = 0; index < rounds; index++) {
        let result=playRound();

        if(result==1)
        {
            console.log("You wins this round");
        }
        else if(result==-1)
        {
            console.log("Computer wins this round");
        }
        else
        {
            console.log("Tie");
        }

        playerCount=(result==1)?playerCount+1:playerCount;
        compCount=(result==-1)?compCount+1:compCount;
    }

    if(playerCount>compCount)
        alert("Human Wins!!!");
    else if(playerCount<compCount)
        alert("Computer Wins!!!");
    else
        alert("Its a Tie!!");
}

Game();
