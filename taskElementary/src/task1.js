'use strict';

function task1 (length, width, symbol) {
    let result;

    try {
        preValidate(length, width, symbol);
        result = drawBoard(length, width, symbol);
    } catch (err) {
        result = {status: 'failed', reason: err};
    }

    return result;
}

function drawBoard (length, width, symbol) {
    let chessBoard = '',
        newLength;  

    for (let i = 1; i <= width; i++) {
        newLength = length * 2;

        for (let j = 1; j < newLength; j++) {
            chessBoard += (i % 2 === j % 2)? `${symbol}` : ` `;
        }

        if (i === width) {
            break;
        } else {
            chessBoard += `\n`;
        } 
    }

    return chessBoard;
}

function preValidate (length, width, symbol) {
    if (typeof length !== 'number' || typeof width !== 'number') {
        throw 'enter numbers';
    }

    if (length <= 0 || width <= 0) {
        throw 'enter positive numbers';
    }

    if (!length || !width || !symbol) {
        throw 'enter all parameters';
    }
}