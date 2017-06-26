'use strict';

function task5 (context) {
    let result,
        min = Number(context.min),
        max = Number(context.max);

    try {
        preValidate(context, min, max);
        result = compareFunction(countSimple(min, max), countDifficult(min, max));
    } catch (err) {
        result = {status: 'failed', reason: err};
    }

    return result;
}

function preValidate (context, min, max) {
    if (isNaN(max) || isNaN(min) ||
        context.min.length !== 6 ||
        context.max.length !== 6) {
        
        throw 'enter string length of 6 numbers';
    }

    if (min > max) {
        throw 'min is more than max lol';
    }
}

function countSimple (min, max) {
    let sumOfLuck = 0;

    for (let i = min; i <= max; i++) {
        let array = i.toString().split('');

        if (Number(array[0]) + Number(array[1]) + Number(array[2]) === 
            Number(array[3]) + Number(array[4]) + Number(array[5])) {

            sumOfLuck++;
        }
    }

    return sumOfLuck;
}

function countDifficult (min, max) {
    let sumOfLuck = 0;
    
    for (let i = min; i <= max; i++) {
        let even = 0,
            odd = 0,
            array = i.toString().split('');

        for (let j = 0; j < array.length; j++) {
            let num = Number(array[j]);
            num % 2 == 0 ? even += num : odd += num;
        }

        if (even === odd) {
            sumOfLuck++;
        }
    }

    return sumOfLuck;
}

function compareFunction (simple, difficult) {
    return (simple > difficult) ? `simple:${simple}` : `difficult:${difficult}`;
}