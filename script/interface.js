document.addEventListener('DOMContentLoaded', () => {


    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        gameOver = true;
        let message = "";

        if (playerTime === 0) {
            player1Victories++;
            message = `A princesa venceu!`;
        } else {
            player2Victories++;
            message = `O principe venceu!`;
        }

        // adicionar a contagem de vitórias de cada jogador na mensagem
        message += `\n\nPrincesa: ${player1Victories} vitórias\nPrincipe: ${player2Victories} vitórias`;

        setTimeout(() => {
            alert("O Jogo Acabou - " + message);
        }, 10);
    };

    updateSquare(position);

    
}

function updateSquare(position) {

    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;

}



function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;

    // limpar as marcações dos quadrados no tabuleiro
    let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.innerHTML = "";
    });
}

// adicionar um event listener para o botão reset
let resetButton = document.getElementById("reset-button");
resetButton.addEventListener('click', resetGame);


