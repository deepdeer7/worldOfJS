"use strict"

var context = {
    min: '100000',
    max: '100101'
}

function countSimple(context) {
    var max, min, count,
    i, arr, error;

  	try {
  	    max = Number(context.max);
	    min = Number(context.min);

        if (context.min.length != 6 || context.max.length != 6 || min > max) {
            throw new SyntaxError('Data invalid');
		}

		count = 0;

		for (i = min; i <= max; i++) {
		    arr = i.toString().split('');

		    if (Number(arr[0]) + Number(arr[1]) + Number(arr[2]) === 
		    	Number(arr[3]) + Number(arr[4]) + Number(arr[5])) {
		        count++;
		    }
        }

        return count;

	} catch(e) {

        error = {
            status: 'failed',
            reason: 'Enter valid data(numbers)'
        };

        alert ('status: ' + error.status + ', reason: ' + error.reason);

	}

}


function countDifficult(context) {
    var max, min,
    count, i, j,
    even, odd,  
    num, arr, error;

  	try {
  	    max = Number(context.max);
	    min = Number(context.min);

		if (context.min.length != 6 || context.max.length != 6 || min > max) {
		    throw new SyntaxError('Data invalid');
		}

        count = 0;
	
	    for (i = min; i <= max; i++) {
		    even = 0;
		    odd = 0;
		    arr = i.toString().split('');

		    for (j = 0; j < arr.length; j++) {
		        num = Number(arr[j]);
                num %2 == 0 ? even += num : odd += num;
		    }

		    if (even === odd) {
                count++;
		    }
		 
        }

        return count;

    } catch(e) {
   	
        error = {
            status: 'failed',
            reason: 'Enter valid data(numbers)'
          }

        alert ('status: ' + error.status + ', reason: ' + error.reason);

	}

}

function compareFun(simple, difficult) {
	return (simple > difficult) ? 'simple: ' + simple :
	'difficult: ' + difficult;
}