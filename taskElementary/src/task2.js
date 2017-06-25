'use strict';

function task2 (envelopeFirst, envelopeSecond) {
    let result;

    try {
        preValidate(envelopeFirst, envelopeSecond);
        result = analyseEnvelopes(envelopeFirst, envelopeSecond);
    } catch (err) {
        result = {status: 'failed', reason: err};
    }

    return result;
}

function analyseEnvelopes (envelopeFirst, envelopeSecond) {
    let resultNumber = 0;

    if (firstIsSmaller(envelopeFirst, envelopeSecond)) {
        resultNumber = 1;
    } else if (secondIsSmaller(envelopeSecond, envelopeFirst)) {
        resultNumber = 2;
    }

    return resultNumber;
}

function firstIsSmaller (first, second) {
    return first.a < second.c && first.b < second.d ||
        first.a < second.d && first.b < second.c;
}

function secondIsSmaller (second, first) {
    return first.a > second.c && first.b > second.d ||
        first.a > second.d && first.b > second.c;

}

function preValidate (envelopeFirst, envelopeSecond) {
    if (typeof envelopeFirst.a !== 'number' ||
        typeof envelopeFirst.b !== 'number' || 
        typeof envelopeSecond.c !== 'number' ||
        typeof envelopeSecond.d !== 'number') {
        
        throw 'enter numbers, please';
    }

    if (envelopeFirst.a <= 0 || envelopeFirst.b <= 0 || 
        envelopeSecond.c <= 0 || envelopeSecond.d <= 0) {

        throw 'enter positive numbers';
    }
}
