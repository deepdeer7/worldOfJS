'use strict';

var envelopeOne = {
    a: 9, 
    b: 6
}

var envelopeTwo = {
    c: 10,
    d: 40
}

function putIn(envFirst, envSecond) {
    var max1, min1,
    max2, min2;

    try {
        if (typeof envFirst.a !== 'number' || typeof envFirst.b !== 'number' || 
            typeof envSecond.c !== 'number' || typeof envSecond.d !== 'number' || 
            envFirst.a <= 0 || envFirst.b <= 0 || envSecond.c <= 0 || envSecond.d <= 0) {
                throw new SyntaxError('Data invalid');
        }
        
        if (envFirst.a > envFirst.b) {
            max1 = envFirst.a;
            min1 = envFirst.b;
        } else {
            max1 = envFirst.b;
            min1 = envFirst.a;
        }

        if (envSecond.c > envSecond.d) {
            max2 = envSecond.c;
            min2 = envSecond.d;
        } else {
            max2 = envSecond.d;
            min2 = envSecond.c;
        }    

        return (max1 > max2 && min1 > min2) ? 2 : (max1 < max2 && min1 < min2) ? 1 : 0;

    } catch(e) {

        let error = {
            status: 'failed',
            reason: 'Enter valid data(numbers)'
        }

        console.log(`status: ${error.status}, reason: ${error.reason}`);
    }
}