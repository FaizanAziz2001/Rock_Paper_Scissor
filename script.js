let rules = ["Rock", "Paper", "Scissor"];
let compCount = 0;
let playerCount = 0;
let totalRounds=5;

let addlisteners = () => {
    const btns = document.querySelectorAll("input");
    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            console.log(event.target.value);
            playRound(event.target.value);
        });
    });
}

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
    if (playerselection == "Rock" && computerselection == "Scissor" ||
        playerselection == "Paper" && computerselection == "Rock" ||
        playerselection == "Scissor" && computerselection == "Paper")
        {
        playerCount++;
        return 1;
        }
    else
    {
        compCount++;
        return -1;
    }
}


let writeSymbol=(playerselection,computerselection)=>
{
    const playImg=document.querySelector('.innerlayer-1 #p-img');
    const compImg=document.querySelector('.innerlayer-1 #c-img');

    playImg.src="images/"+playerselection.toLowerCase()+".png";
    compImg.src="images/"+computerselection.toLowerCase()+".png";
}
let writeScore=(score1,score2)=>{
    const pscore=document.querySelector("#pScore");
    const cscore=document.querySelector("#cScore");

    pscore.textContent=score1;
    cscore.textContent=score2;
}

let GameOverCheck=(count1,count2)=>
{
    return (count1==totalRounds || count2==totalRounds);
}
let GameOver=(count1,count2)=>{

    
    let text;

    if (count1==totalRounds)
        text="Human Wins!!!";
    else if (count2==totalRounds)
        text="Computer Wins!!!";

    displaymodal(text);

    
}

let playRound = (playerselection) => {

    let computerselection = getComputerChoice();
    let result = conditions(playerselection, computerselection);
    writeScore(playerCount,compCount);
    writeSymbol(playerselection, computerselection);
    if(GameOverCheck(playerCount,compCount))
    {
    GameOver(playerCount,compCount);

    }



}


let displaymodal=(text)=>
{
    const modal=document.querySelector('#modal');
    const heading=document.querySelector("#modal h1");
    const btn=document.querySelector('dialog button');

    btn.addEventListener('click',()=>{
        location.reload();
    })
    modal.showModal();
    heading.textContent=text;
}

if(GameOverCheck(playerCount,compCount))
{
GameOver(playerCount,compCount);
}
else
addlisteners();
