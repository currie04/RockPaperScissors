
let humanScore = 0;
let computerScore = 0;
let choice = "";

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const again = document.querySelector("#again");

const results = document.querySelector("#results");
const score = document.querySelector("#score");
const end = document.querySelector("#end");

rock.addEventListener("click", function () {
    choice = "rock";
    playRound(choice);
})

paper.addEventListener("click", function() {
    choice = "paper";
    console.log(choice);
    playRound(choice);
})

scissors.addEventListener("click", function() {
    choice = "scissors";
    playRound(choice);
})

again.addEventListener("click", function(){
    again.hidden = true;
    humanScore = 0;
    computerScore = 0;
    results.textContent = "";
    score.textContent = "";
    end.textContent = "";
    rock.hidden = false;
    paper.hidden = false;
    scissors.hidden = false;
})





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


function playRound(humanChoice){
    console.log(humanChoice);
    computerChoice = getComputerChoice();
    let win = false;


    if (humanChoice === computerChoice){
        results.textContent = `${humanChoice} and ${computerChoice}! It's a tie!`;
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
        results.textContent = `Well done! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        results.textContent = `${humanChoice} loses to ${computerChoice}`;
        computerScore++;
    }

    score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;

    if(humanScore === 5 || computerScore === 5){
        if (humanScore > computerScore){
            results.textContent = "Player Wins!"
        } else {
            results.textContent = "Computer Wins!";
        }
        again.hidden = false;
        rock.hidden = true;
        paper.hidden = true;
        scissors.hidden = true;
    } else {
        end.textContent = "";
    }

}


