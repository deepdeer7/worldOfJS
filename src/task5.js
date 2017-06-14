"use strict"


var context = {
	min: '000011',
	max: '104444'
}

function countSimple(context) {


  try {

  	 var max = +context.max;
	 var min = +context.min;

		if ( context.min.length != 6 || context.max.length != 6 || min > max  ) {
			throw new SyntaxError('Data invalid');
		}

		var count = 0;

		for ( var i = min; i <= max; i++) {
		var str = i + '';
		var arr = str.split('');

		if ( arr[0] + arr[1] + arr[2] == arr[3] + arr[4] + arr[5] ) {
			count++;
		}
	}

	return count;


	} catch(e) {

		var error = {
            status: 'failed',
            reason: 'Enter valid data(numbers)'
          }

    alert ('status: ' + error.status + ', reason: ' + error.reason);

	}

}


function countDifficult(context) {

  var max = +context.max;
  var min = +context.min;

  try {
		if ( context.min.length != 6 || context.max.length != 6 || min > max  ) {
			throw new SyntaxError('Data invalid');
		}

	var even = 0;
	var odd = 0;
	var count = 0;

	for ( var i = min; i <= max; i++) {
		var str = i + '';
		var arr = str.split('');

		for ( var j = 0; j < arr.length; j++) {
			if ( arr[j] %2 == 0) {
				even += +arr[j];
			} else {
				odd += +arr[j];
			}
		}

		if ( even == odd) {
			count++;
		}
		 even = 0;
	     odd = 0;
    }

   return count;

   } catch(e) {
   	
		var error = {
            status: 'failed',
            reason: 'Enter valid data(numbers)'
          }

    alert ('status: ' + error.status + ', reason: ' + error.reason);


	}

}



function compareFun(simple, difficult) {
	return ( simple > difficult ) ? 'simple: ' + simple :
	'difficult: ' + difficult;
	
}




























