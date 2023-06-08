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
        return "Tie";
    if (playerselection == "Rock" && computerselection == "Paper")
        return "You Lost! Computer Wins";
    if (playerselection == "Rock" && computerselection == "Scissor")
        return "You Win! Computer Lost";

    if (playerselection == "Paper" && computerselection == "Scissor")
        return "You Lost! Computer Wins";
    if (playerselection == "Paper" && computerselection == "Rock")
        return "You Win! Computer Lost";

    if (playerselection == "Scissor" && computerselection == "Rock")
        return "You Lost! Computer Wins";
    if (playerselection == "Scissor" && computerselection == "Paper")
        return "You Win! Computer Lost";
}

let playRound = () => {
    let playerselection = getHumanChoice();
    let computerselection = getComputerChoice();
    return conditions(playerselection,computerselection);
}

let Game=()=>{
    rounds=5;
    for (let index = 0; index < rounds; index++) {
        console.log(playRound());
    }
}

Game();
