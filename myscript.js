// Computer selects an option from rock, paper or scissor
let computerChoice = function() {
    random_number = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissor"]
    return selection = choices[random_number]    
}

// Retrieve input from the player
let playerChoice = function() {
    let player_choice = prompt("Select your option: ", "");

    // Cast the player selection to lowercase and ensure it is a valid option
    player_choice = player_choice.toLowerCase();
    if (player_choice == "rock" || player_choice == "paper" || player_choice == "scissor") {
        return player_choice;
    } else {
        // If players choice is not valid, prompt error message and ask for new input
        alert("Player choice is not valid");
        playerChoice()
    }
}

// If statement to determine the winner, computer or human depending on choices. Returns 1 if human wins, returns 2 if computer wins.
let determineWinner = function(player_choice, computer_choice) {

    // Determine if human wins. returns value 1 if true.
    if ((player_choice == "rock" && computer_choice == "scissor") ||
        (player_choice == "scissor" && computer_choice == "paper") ||
        (player_choice == "paper" && computer_choice == "rock")) {
            return 1;
        }
    
    // Determine if the computer wins. returns value 2 if true.
    else if ((computer_choice == "rock" && player_choice == "scissor") ||
    (computer_choice == "scissor" && player_choice == "paper") ||
    (computer_choice == "paper" && player_choice == "rock")) {
        return 2;

    // If no winner, log a draw.
    } else {
        console.log("Its a draw");
    }};

// Receive the human input and computer input. Run the determine winner function and update the scores. Returns 1 if human wins, returns 2 if computer wins.
let playRound = function() {

    //Retrieve the computer input.
    const computerSelection = computerChoice()
    console.log(computerSelection);

    //Retrieve the human input.
    const humanSelection = playerChoice()
    console.log(humanSelection);

    //Return the winner. 1 if human wins, 2 if computer wins.
    return determineWinner(humanSelection, computerSelection);
}

// Main function. Contains while loop to run playRound 5 times. Updates the user scores and logs the round winner and current scores.
let playGame = function() {

    // Set scores to 0
    let playerScore = 0;
    let computerScore = 0;

    let round = 0;
    while (round < 6){

        // Play a round
        let roundWinner = playRound()

        // If human wins, increment the score
        if (roundWinner === 1) {
            console.log("Human wins!");
            playerScore++
        }

        // If computer wins, increment the score
        else if (roundWinner === 2) {
            console.log("Computer wins!");
            computerScore++
        }

        // Log current scores
        console.log("Current scores: ");
        console.log(`Human score ${playerScore} computerScore ${computerScore}`)
        round++
    }

    // Determine the game winner and display in the console. 
    let winner = (playerScore > computerScore) ? "Human won the game!" :
                 (computerScore > playerScore) ? "Computer won the game!" :
                 "Game ended in a draw!";
    console.log(winner);
}

// Run the main function to start the game.
playGame();