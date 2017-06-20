'use strict';

function getPalindrom(num) {
    var palindroms = [],
    strOfPalindrom,
    i, j, len,  
    testOfPalindrom;

    try {
        if (typeof num !== 'number' || num <= 0) {
            throw new SyntaxError('Data invalid');
        }

        strOfPalindrom = num.toString();        

        for (i = 0; i < strOfPalindrom.length; i++) {
            len = strOfPalindrom.length;

            for (j = i; j < strOfPalindrom.length; j++) {
                testOfPalindrom = strOfPalindrom.slice(i, len--);
                if (strOfPalindrom.length - j > 1) {
                    if (testOfPalindrom === testOfPalindrom.split('').reverse().join('')) {
                        palindroms.push(testOfPalindrom)
                    }
                }
              
            }

        }

        return Math.max.apply(null, palindroms);

    } catch(e) {

        let error = {
            status: 'failed',
            reason: 'Enter valid data(numbers)'
        }

        console.log(`status: ${error.status}, reason: ${error.reason}`);
    }

}