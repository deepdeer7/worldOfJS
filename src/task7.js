'use strict';

var contextTwo = {
    length: 2
}

function countFib(context) {
    var listOfNumbers;

    try {
        if (context.min && context.max) {
            if (typeof context.min !== 'number' || typeof context.max !== 'number' || context.max < context.min || 
            context.max <= 0 || context.min <= 0  ) {
                throw new SyntaxError('Data invalid');
           } 

            listOfNumbers = countByMinMax(context.min, context.max)
        
        } else if (context.length || context.length == 0) {
            if (typeof context.length != 'number' || context.length <= 0) {
                throw new SyntaxError('Data invalid');
            } 

            listOfNumbers = countByLength(context.length);
        }

        return listOfNumbers;

    } catch(e) {

        let error = {
            status: 'failed',
            reason: 'Enter valid data(numbers)'
        }

        console.log(`status: ${error.status}, reason: ${error.reason}`);
    }
}

function countByMinMax(min, max) {
    var a = 1, b = 1, c,
    numbers = [], i;

    if (min === 1) {
        numbers.push(a);
        numbers.push(b);
    }
        
    for (i = 3; i < max; i++) {
        c = a + b;
        a = b;
        b = c;

        if (c > max) {
            break;    
        } 

        if (c >= min) {
            numbers.push(c)
        }
    }

    return numbers;
}

function countByLength(length) {
    var a = 1, b = 1, 
    c, numbers = [], i;

    if (length === 1) {
        numbers.push(a);
        numbers.push(b);
    }
   
    for (i = 3; ; i++) {
        c = a + b;
        a = b;
        b = c;

        if (c.toString().length === length) {
            numbers.push(c)
        } 

        if (c.toString().length > length) {
            break;
        }
    }

    return numbers;
}