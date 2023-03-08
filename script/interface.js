// Waits for the DOM to load before executing the code
document.addEventListener('DOMContentLoaded', () => {

    // Selects all squares of the board
    let squares = document.querySelectorAll(".square");

    // Adds an event listener to each square, to handle clicks
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

// Handles clicks on the squares of the board
function handleClick(event) {
    let square = event.target;
    let position = square.id;

    // Calls the handleMove function to handle the move
    if (handleMove(position)) {

        // If the game is over, displays a message with the winner and the score
        gameOver = true;
        let message = "";

        if (playerTime === 0) {
            player1Victories++;
            message = `The princess won!`;
        } else {
            player2Victories++;
            message = `The prince won!`;
        }

        // Adds the score of each player to the message
        message += `\n\nPrincess: ${player1Victories} victories\nPrince: ${player2Victories} victories`;

        // Displays the message with a small delay, to avoid displaying it too soon
        setTimeout(() => {
            alert("The game is over - " + message);
        }, 10);
    };

    // Updates the square on the board with the symbol of the player who played on it
    updateSquare(position);
}

// Updates the square on the board with the symbol of the player who played on it
function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}

// Resets the game
function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;

    // Clears the markings on the squares of the board
    let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.innerHTML = "";
    });
}

// Adds an event listener to the reset button, to reset the game when clicked
let resetButton = document.getElementById("reset-button");
resetButton.addEventListener('click', resetGame);
