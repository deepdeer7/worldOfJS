'use strict';

function task7 (context) {
    let error = preValidate(context),
    result;

    if (error === '' && context.length) {
        result = countByLength(context.length);
    } else if (error === '' && context.min && context.max) {
        result = countByMinMax(context.min, context.max); 
    } else {
        result = {status: 'failed', reason: error};
    }

    return result;
}

function countByMinMax (min, max) {
    let a = 1,
        b = 1, 
        c = 0,
        numbers = [];

    if (min === 1) {
        numbers.push(a, b);
    }
        
    while (a + b <= max) {
        c = a + b;
        a = b;
        b = c;

        if (c >= min) {
            numbers.push(c);
        }
    }

    return numbers;
}

function countByLength (length) {
    let a = 1,
        b = 1,
        c = 0,
        numbers = [];

    if (length === 1) {
        numbers.push(a, b);
    }
   
    while (c.toString().length <= length) {
        c = a + b;
        a = b;
        b = c;

        if (c.toString().length === length) {
            numbers.push(c);
        } 
    }

    return numbers;
}

function preValidate (context) {
    let resultValidate;

    if (context.min && context.max) {
        resultValidate = preValidateMinMax(context.min, context.max);       
    }

    if (context.length) {
        resultValidate = preValidateLength(context.length);          
    }

    return resultValidate;
}

function preValidateMinMax (min, max) {
    let error = '';
    
    if (typeof min !== 'number' || typeof max !== 'number') {
        error = 'enter numbers';
    }

    if (min <= 0 || max <= 0) {
        error = 'enter positive numbers';
    }

    if (max < min) {
        error = 'max should be more than min';      
    }

    return error;
}

function preValidateLength (length) {
    let error = '';

    if (typeof length !== 'number') {
        error = 'enter numbers';
    }
        
    if (length <= 0) {
        error = 'enter positive numbers';
    } 

    return error; 
}