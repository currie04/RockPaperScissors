
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choice = Math.random();
    if (choice >= 0 && choice < 0.25){
        return "rock";
    }
    else if (choice >= 0.25 && choice < 0.75){
        return "paper";
    }
    return "scissors";
 }

function getHumanChoice(){
    let choice = prompt("Make your choice: Rock, Paper, or Scissors").toLowerCase();

    if (choice != "rock" && choice != "paper" && choice != "scissors"){
        console.log("Please enter one of the three options");
        getHumanChoice();
    } 
    return choice;
}

function playRound(computerChoice, humanChoice){
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    let win = false;

    if (humanChoice === computerChoice){
        console.log(humanChoice, " and ",  computerChoice, "! It's a tie!");
        let playAgain = prompt("Do u want to play again: Y/N").toUpperCase();
        if (playAgain === "Y"){
            playRound();
        }
        return;
    }

    switch(humanChoice){
        case "rock":
            if (computerChoice === "scissors"){
                win = true;
            } 
            break; 

        case "paper":
            if (computerChoice === "rock"){
                win = true;  
            }
            break;
        
        case "scissors":
            if (computerChoice === "paper"){
                win = true;
            }
            break;
    }


    if (win === true){
        console.log("Well done! " , humanChoice, "beats ", computerChoice);
        humanScore++;
    } else {
        console.log(humanChoice, " loses to ", computerChoice);
        computerScore++;
    }

    console.log("Player Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

    let playAgain = prompt("Do u want to play again: Y/N").toUpperCase();

    if (playAgain === "Y"){
        playRound();
    }

}

playRound();
