// initialize variables
let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbol = ['o', 'x'];
let gameOver = false;
let player1Victories = 0;
let player2Victories = 0;

// function to handle a player move
function handleMove(position) {

    // check if game is over
    if (gameOver) {
        return;
    }

    // check if position on board is empty
    if (board[position] == '') {
        // set the symbol for the current player on the board
        board[position] = symbol[playerTime];

        // check if game is won
        gameOver = isWin();

        // if game is not over, switch to the next player
        if (gameOver == false) {
            playerTime = (playerTime + 1) % 2;
        }
    }

    return gameOver;
}

// function to check if game is won
function isWin() {
    // possible win combinations on the board
    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // check if any of the possible win combinations has been achieved
    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {
            return true;
        }
    }

    return false;
}
