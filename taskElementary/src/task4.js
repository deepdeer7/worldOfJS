'use strict';

function task4 (number) {
    let result;

    try {
        preValidate(number);
        result = getPalindrom(number);
    } catch (err) {
        result = {status: 'failed', reason: err};
    }

    return result;
}

function getPalindrom (number) {
    let palindroms = [],
    strOfPalindrom,  
    testOfPalindrom,
    maxPalindrom;

    strOfPalindrom = number.toString();        

        for (let i = 0; i < strOfPalindrom.length; i++) {
            let lengthOfPart = strOfPalindrom.length;

            for (let j = i; j < strOfPalindrom.length; j++) {
                testOfPalindrom = strOfPalindrom.slice(i, lengthOfPart--);

                if (strOfPalindrom.length - j > 1) {
                    if (testOfPalindrom === testOfPalindrom.split('').reverse().join('')) {
                        palindroms.push(testOfPalindrom);
                    }
                }
            }
        }

        maxPalindrom = Math.max(...palindroms);

        // check of -Infinity
        if (!isFinite(maxPalindrom)) {
            maxPalindrom = 'no palindroms';
        }

        return maxPalindrom;
}

function preValidate (number) {
    if (typeof number !== 'number') {
        throw 'enter a number';
    }

    if (number <= 0) {
        throw 'enter a positive number';
    }
}