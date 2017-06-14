

"use strict"

var envelopeOne = {
	a: 9.4,
	b: 12.1
}

var envelopeTwo = {
	c: 1,
	d: 4
}


function putIn(envFirst, envSecond) {

	try {
		if ( isNaN(envFirst.a) ||  isNaN(envFirst.b) || isNaN(envSecond.c) || isNaN(envSecond.d) ||
		       envFirst.a <= 0 ||  envFirst.b <= 0  || envSecond.c <= 0 ||  envSecond.d <= 0   ) {
			throw new Error('Data invalid');
		}

		var max1;
		var min1;

		if ( envFirst.a > envFirst.b) {
			max1 = envFirst.a;
			min1 = envFirst.b;
		} else {
			max1 = envFirst.b;
			min1 = envFirst.a;
		}

		var max2;
		var min2;

		if ( envSecond.c > envSecond.d ) {
			max2 = envSecond.c;
			min2 = envSecond.d;
		} else {
			max2 = envSecond.d;
			min2 = envSecond.c;
		}	

	    return ( max1 > max2 && min1 > min2   ) ? 2 : ( max1 < max2 && min1 < min2  ) ? 1 : 0;


	} catch(e) {
		
			var error = {
            status: 'failed',
            reason: 'Enter valid data(numbers)'
          }

    alert ('status: ' + error.status + ', reason: ' + error.reason);

	}
}

	





















