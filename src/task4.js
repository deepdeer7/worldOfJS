"use strict"

function getPalindrom(n) {

	try {
		var arr = [];

		if ( isNaN(n) ) {
			throw new SyntaxError('Data invalid');
		}

	    var str = n.toString();

		 for ( var j = 0; j < str.length; j++) {
	    	var len = str.length;

		    for ( var i = j; i < str.length; i++) {
			
			   if ( len - i > 2) {
			     var newStr = str.slice(i, len--);

				  if ( newStr == newStr.split('').reverse().join('') ) {
				  arr.push(newStr)
			      }
			    }
	          
		    }

	     }

	return Math.max.apply(null, arr);

	} catch(e) {
		
		var error = {
            status: 'failed',
            reason: 'Enter valid data(numbers)'
          }

      alert ('status: ' + error.status + ', reason: ' + error.reason);

	}

}

























