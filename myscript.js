let computerChoice = function() {
    random_number = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissor"]
    return selection = choices[random_number]    
}

let createPara = function(string) {
    let para = document.createElement("p");
    para.textContent = string;
    parentDiv.appendChild(para);
}      

let determineWinner = function(player_choice, computer_choice) {

    if ((player_choice == "rock" && computer_choice == "scissor") ||
        (player_choice == "scissor" && computer_choice == "paper") ||
        (player_choice == "paper" && computer_choice == "rock")) {
            createPara(`${player_choice} beats ${computer_choice}, you win!`)
            return 1;
        }
    else if ((computer_choice == "rock" && player_choice == "scissor") ||
        (computer_choice == "scissor" && player_choice == "paper") ||
        (computer_choice == "paper" && player_choice == "rock")) {
            createPara(`${computer_choice} beats ${player_choice}, the computer win!`)
            return 2;
    }
    else {
        createPara("Its a draw");
    }};

let resetGame = function() {

    parentDiv.textContent = "";

    PLAYERSCORE = 0;
    COMPUTERSCORE = 0;
    
    computerScoreTag.textContent = `Computer Score 0`;
    playerScoreTag.textContent = `Computer Score 0`;
}

let playGame = function(e) {
    e.stopPropagation();

    parentDiv.textContent = "";

    let player_choice = e.target.id;
    createPara(`You selected ${player_choice}`);
             
    let computer_choice = computerChoice();
    createPara(`Computer counters with ${computer_choice}`);

    let roundWinner = determineWinner(player_choice, computer_choice);
    if (roundWinner === 1) {
        PLAYERSCORE++;
        playerScoreTag.textContent = `Player Score ${PLAYERSCORE}`;
    } else if (roundWinner === 2) {
        COMPUTERSCORE++;
        computerScoreTag.textContent = `Computer Score ${COMPUTERSCORE}`;
    }

    if (PLAYERSCORE > 4 || COMPUTERSCORE > 4) {
        let gameWinner = (PLAYERSCORE > COMPUTERSCORE) ? "Player" : "Computer";
        resetGame()
        createPara(`Game ended winner is ${gameWinner}`);
    }
}

let PLAYERSCORE = 0;
let COMPUTERSCORE = 0;
let playerScoreTag = document.querySelector("#playerScore");
let computerScoreTag = document.querySelector("#computerScore");
let parentDiv = document.querySelector(".display-div");

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", playGame));

