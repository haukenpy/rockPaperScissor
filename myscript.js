let computerChoice = function() {
    random_number = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissor"]
    return selection = choices[random_number]    
}

let playerChoice = function() {
    let player_choice = prompt("Select your option: ", "");

    // Cast the player selection to lowercase and ensure it is a valid option
    player_choice = player_choice.toLowerCase();
    if (player_choice == "rock" || player_choice == "paper" || player_choice == "scissor") {
        return player_choice;
    } else {
        alert("Player choice is not valid");
        playerChoice()
    }
}

// Returns 1 if human wins, returns 2 if computer wins.
let determineWinner = function(player_choice, computer_choice) {

    if ((player_choice == "rock" && computer_choice == "scissor") ||
        (player_choice == "scissor" && computer_choice == "paper") ||
        (player_choice == "paper" && computer_choice == "rock")) {
            return 1;
        }
    
    else if ((computer_choice == "rock" && player_choice == "scissor") ||
    (computer_choice == "scissor" && player_choice == "paper") ||
    (computer_choice == "paper" && player_choice == "rock")) {
        return 2;
    } else {
        console.log("Its a draw");
    }};

// Returns 1 if human wins, returns 2 if computer wins.
let playRound = function() {

    const computerSelection = computerChoice()
    console.log(computerSelection);

    const humanSelection = playerChoice()
    console.log(humanSelection);

    return determineWinner(humanSelection, computerSelection);
}


let playGame = function() {

    let playerScore = 0;
    let computerScore = 0;

    let round = 0;
    // while (round < 5){

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
    console.log(winner);
    }

playGame();