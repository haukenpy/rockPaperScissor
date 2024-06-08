let computerChoice = function() {
    random_number = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissor"]
    return selection = choices[random_number]    
}

let createPara = function(string) {
    let parentDiv = document.querySelector(".display-div");
    let para = document.createElement("p");
    para.textContent = string;
    parentDiv.appendChild(para);
}      

let determineWinner = function(player_choice, computer_choice) {

    if ((player_choice == "rock" && computer_choice == "scissor") ||
        (player_choice == "scissor" && computer_choice == "paper") ||
        (player_choice == "paper" && computer_choice == "rock")) {
            createPara(`${player_choice} beats ${computer_choice}, you win!`)
        }
    else if ((computer_choice == "rock" && player_choice == "scissor") ||
        (computer_choice == "scissor" && player_choice == "paper") ||
        (computer_choice == "paper" && player_choice == "rock")) {
            createPara(`${computer_choice} beats ${player_choice}, you win!`)
    }
    else {
        createPara("Its a draw");
    }};

// Returns 1 if human wins, returns 2 if computer wins.
let playRound = function() {

    const computerSelection = computerChoice()
    console.log(computerSelection);

    const humanSelection = playerChoice()
    console.log(humanSelection);

    return determineWinner(humanSelection, computerSelection);
}


let playGame = function(e) {

    this.event.stopPropagation();

    let player_choice = e.target.id;
    createPara(`You selected ${player_choice}`);
             
    let computer_choice = computerChoice();
    createPara(`Computer counters with ${computer_choice}`);

    let playerScore = 0;
    let computerScore = 0;

    let round = 0;
    /* while (round < 5){

        let roundWinner = playRound()

        if (roundWinner === 1) {
            console.log("Human wins!");
            playerScore++
        }

        else if (roundWinner === 2) {
            console.log("Computer wins!");
            computerScore++
        }

        console.log("Current scores: ");
        console.log(`Human score ${playerScore} computerScore ${computerScore}`)
        round++
    //}

    let winner = (playerScore > computerScore) ? "Human won the game!" :
                 (computerScore > playerScore) ? "Computer won the game!" :
                 "Game ended in a draw!";
    console.log(winner); */
    }


const buttons = document.querySelectorAll("button");
buttons.forEach.call(buttons, addEventListener("click", function(e) { playGame(e); }));
