'use strict';

var contextTwo = {
    length: 5
}

function countFib(context) {
    var a, b, c,
    result = [], i,
    error;

    try {
        a = 1;
        b = 1;

        if (context.min && context.max ) {
            if (typeof context.min !== 'number' || typeof context.max !== 'number' || context.max < context.min || 
            context.max <= 0 || context.min <= 0  ) {
                throw new SyntaxError('Data invalid');
           }
    
            if (context.min === 1) {
                result.push(a);
                result.push(b);
            }
        
            for (i = 3; ; i++) {
                c = a + b;
                a = b;
                b = c;

                if (c > context.max) break;

                if (c >= context.min) {
                    result.push(c)
                }
            }

            return result;
   
        } else if (context.length || context.length == 0) {
            if (typeof context.length != 'number' || context.length <= 0) {
                throw new SyntaxError('Data invalid');
            }

            if (context.length === 1) {
                result.push(a);
                result.push(b);
            }
   
            for (i = 3; ; i++) {
                c = a + b;
                a = b;
                b = c;

                if (c.toString().length === context.length) {
                    result.push(c)
                } 

                if (c.toString().length > context.length) {
                    break;
                }
            }

            return result;

        }

    } catch(e) {
        error = {
            status: 'failed',
            reason: 'Enter valid data(numbers)'
        }

        alert  ('status: ' + error.status + ', reason: ' + error.reason);

    }
 
}