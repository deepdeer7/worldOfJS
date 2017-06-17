"use strict"

function drawBoard(length, width, symbol) {
    var i, j,
    chessBoard,
    error;  

    try {
        if (typeof length !== 'number' || typeof width !== 'number' || 
            symbol === undefined || length <= 0 || width <= 0) {
                throw new SyntaxError('Data invalid');
    }

        chessBoard = '';

        for (i = 1; i <= width; i++) {
            for (j = 1; j < length * 2; j++) {
                chessBoard += (i % 2 === j % 2 ) ? symbol : ' ';
            }
            chessBoard += '\n';
        }

        return chessBoard;

    } catch(e) {

        error = {
            status: 'failed',
            reason: 'Enter valid data(numbers)'
          }

        alert ('status: ' + error.status + ', reason: ' + error.reason);
    }

}