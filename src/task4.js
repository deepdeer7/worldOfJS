'use strict';

function task4 (number) {
    var result;

    try {
        preValidate(number);
        result = getPalindrom(number);
    } catch (err) {
        result = {status: 'failed', reason: err};
    }

    return result;
}

function preValidate (number) {
    if (typeof number !== 'number') {
        throw 'enter a number';
    }

    if (number <= 0) {
        throw 'enter a positive number';
    }
}

function getPalindrom (number) {
    var palindroms = [],
    strOfPalindrom,
    i, j, lengthOfPart,  
    testOfPalindrom,
    maxPalindrom;

    strOfPalindrom = number.toString();        

        for (i = 0; i < strOfPalindrom.length; i++) {
            lengthOfPart = strOfPalindrom.length;

            for (j = i; j < strOfPalindrom.length; j++) {
                testOfPalindrom = strOfPalindrom.slice(i, lengthOfPart--);

                if (strOfPalindrom.length - j > 1) {
                    if (testOfPalindrom === testOfPalindrom.split('').reverse().join('')) {
                        palindroms.push(testOfPalindrom)
                    }
                }
            }
        }

        maxPalindrom = Math.max.apply(null, palindroms);
        return maxPalindrom;
}