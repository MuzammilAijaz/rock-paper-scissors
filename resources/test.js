function getComputerChoice(){
    let comp_response = Math.floor(Math.random()*3) + 1;
    switch(comp_response){
        case 1:
            comp_response = "rock";
            break;
        case 2:
            comp_response = "paper"
            break;
        case 3:
            comp_response = "scissors"
            break;
    }
    console.log("Computer picked " + comp_response)
    return comp_response;
}
function getHumanChoice(){
    while(1){
        let response = prompt("Rock, Paper or Scissors");
        if(!response) {response = response.toLowerCase();}
        const possibleChoices = ["rock","paper","scissors"];
        if (possibleChoices.includes(response)){
            console.log(`You picked ${response}`);
            return response;
        }
        console.log("Invalid response entered: retry");
    }
}
function playRound(humanChoice, computerChoice){
    if (humanChoice === 'rock' && computerChoice === 'scissors'||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice == 'paper'
    ) {return 1;}
    else if (humanChoice === computerChoice) {return 0;}
    else {return -1;}
}
let humanScore = 0 ;
let computerScore = 0;

function playGame(){
    console.log("score: " + humanScore);
    console.log("Enter your choice : (1) = Rock, (2) = Paper, (3) = Scissors");
    let humanChoice = getHumanChoice();

    let computerChoice = getComputerChoice();
    let win = playRound(humanChoice, computerChoice);
    if(win === -1){console.log("You lost"); --humanScore;++computerScore}
    else if(win === 1) {console.log("You won"); ++humanScore; --computerScore}
    else {console.log("Its a draw");}
}

let PLAYTIMES = 5;
for(let i = 0; i < PLAYTIMES ;i++){
    playGame();
}
