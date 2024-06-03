// Computer selects an option from rock, paper or scissor
let computerChoice = function() {
    random_number = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissor"]
    return selection = choices[random_number]    
}

// Retrieve input from the player
let playerChoice = function() {
    let player_choice = prompt("Select your option: ", "");

    /* Cas the player selection to lowercase and ensure it is a valid option */
    player_choice = player_choice.toLowerCase();
    if (player_choice == "rock" || player_choice == "paper" || player_choice == "scissor") {
        return player_choice;
    } else {
        /* If players choice is not valid, prompt error message and ask for new input */
        alert("Player choice is not valid");
        playerChoice()
    }
}

// If statement to determine the winner, computer or human depending on choices.
let determineWinner = function(player_choice, computer_choice) {
    if ((player_choice == "rock" && computer_choice == "scissor") ||
        (player_choice == "scissor" && computer_choice == "paper") ||
        (player_choice == "paper" && computer_choice == "rock")) {
            console.log("Human wins!");
            playerScore++
            return;
        }
    else if ((computer_choice == "rock" && player_choice == "scissor") ||
    (computer_choice == "scissor" && player_choice == "paper") ||
    (computer_choice == "paper" && player_choice == "rock")) {
        console.log("Computer wins!");
        computerScore++
        return
    } else {
        console.log("Its a draw");
    }};

// Main function. Receive the human input and computer input. Run the determine winner function and update the scores.
let playRound = function() {
    const computerSelection = computerChoice()
    console.log(computerSelection);
    const humanSelection = playerChoice()
    console.log(humanSelection);
    determineWinner(humanSelection, computerSelection);
    console.log(`Human score ${playerScore}, computer score ${computerScore}`)
}

// Set scores to 0
let playerScore = 0;
let computerScore = 0;

playRound()

/* Pseudocode 

Use variables to keep track of scores'
1. Define the logic to determine the winner:
    Rock > Scissors
    Scissors > Paper
    Paper > Rock
    if Computer input == User Input, draw.

2. Keep track of scores (two variables? User Score, Human score?)



Write logic to play a signle round

Write code to play the full game. should last 5 round.

*/