'use strict';

var contextTwo = {
    length: 2
}

function countFib(context) {
   try {
        if (context.min && context.max) {
            if (typeof context.min !== 'number' || typeof context.max !== 'number' || context.max < context.min || 
            context.max <= 0 || context.min <= 0  ) {
                throw new SyntaxError('Data invalid');
           } 

            return countByMinMax(context.min, context.max)
        
        } else if (context.length || context.length == 0) {
            if (typeof context.length != 'number' || context.length <= 0) {
                throw new SyntaxError('Data invalid');
            } 

            return countByLength(context.length);
        }

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
    result = [], i;

    if (min === 1) {
        result.push(a);
        result.push(b);
    }
        
    for (i = 3; i < max; i++) {
        c = a + b;
        a = b;
        b = c;

        if (c > max) {
            break;    
        } 

        if (c >= min) {
            result.push(c)
        }
    }

    return result;
}

function countByLength(length) {
    var a = 1, b = 1, 
    c, result = [], i;

    if (length === 1) {
        result.push(a);
        result.push(b);
    }
   
    for (i = 3; ; i++) {
        c = a + b;
        a = b;
        b = c;

        if (c.toString().length === length) {
            result.push(c)
        } 

        if (c.toString().length > length) {
            break;
        }
    }

    return result;

}