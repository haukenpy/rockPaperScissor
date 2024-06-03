/* Computer selects an option from rock, paper or scissor */

let computerChoice = function() {
    random_number = Math.floor(Math.random() * 3);
    let choices = ["rock", "paper", "scissor"]
    return selection = choices[random_number]    
}

/* Store the computer selection in a variable. */
let computer_selection = computerChoice();
console.log(computer_selection);

/* Retrieve input from the player */
let playerChoice = function() {
    let player_choice = prompt("Select your option: ", "");

    /* Cas the player selection to lowercase and ensure it is a valid option */
    player_choice = player_choice.toLowerCase();
    if (player_choice == "rock" || player_choice == "paper" || player_choice == "scissor") {
        console.log(player_choice);
        return player_choice;
    } else {
        alert("Player choice is not valid");
        playerChoice()
    }
}
playerChoice()

/* Pseudocode 

Write a function that randomly chooses "rock", "paper" or "scissor".
1. Option for a random selection. (math library?)
2. Array containing the three options.
3. Store the selection in  a variable

Write the logic to get the human choice
1. Prompt the user for an input
2. Input should be case sensitive.
3. Input should be stored in a variable.

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