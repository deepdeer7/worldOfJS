'use strict';

function task6 (length, number) {
    let result;
    
    try {
        preValidate(length, number);
        result = getRow(length, number);
    } catch (err) {
        result = {status: 'failed', reason: err};
    }

    return result;
}

function getRow (length, number) {
    let arrOfNumbers = [],
        stringOfNumbers,
        i = 1;

    while (arrOfNumbers.length !== length) {
        if (i * i > number) {
            arrOfNumbers.push(i);
        }

        i++;
    }

    stringOfNumbers = arrOfNumbers.join(',');  
    return stringOfNumbers;
}

function preValidate (length, number) {
    if (typeof length !== 'number' || typeof number !== 'number') {
        throw 'enter numbers';
    }

    if (length <= 0 || number <= 0) {
        throw 'enter positive numbers';
    }
}