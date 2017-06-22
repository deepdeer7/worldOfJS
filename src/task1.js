'use strict';

function drawBoard(length, width, symbol) {
    var i, j,
    chessBoard = '',
    newLength;  

    try {
        if (typeof length !== 'number' || typeof width !== 'number' || 
            symbol === undefined || length <= 0 || width <= 0) {
                throw new SyntaxError('Data invalid');
        }

        for (i = 1; i <= width; i++) {
            newLength = length * 2;
            for (j = 1; j < newLength; j++) {
                chessBoard += (i % 2 === j % 2 ) ? symbol : ' ';
            }
            chessBoard += '\n';
        }

        return chessBoard;

    } catch(e) {

        let error = {
            status: 'failed',
            reason: 'Enter valid data(numbers)'
          }

        console.log(`status: ${error.status}, reason: ${error.reason}`);
    }
}