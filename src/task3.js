

"use strict"

var triangles = [
	 { vertices: 'ABC', a: 5, b: 6, c: 9 }, 
	 { vertices: 'DEF', a: 13, b: 14, c: 15 }, 
	 { vertices: 'XYZ', a: 3, b: 4, c: 5}   
	];


function getSquare(triangles) {
  var obj = {};

	try {

	for ( var i = 0; i < triangles.length; i++) {
		var el = triangles[i];
		var a = el.a;

		if ( isNaN(a) || a <= 0 ) {
			throw new SyntaxError('Data invalid');
		}
		var b = el.b;

		if ( isNaN(b)  || b <= 0  ) {
			throw new SyntaxError('Data invalid');
		}
		var c = el.c;

		if ( isNaN(c)  || c <= 0  ) {
			throw new SyntaxError('Data invalid');
		}

		var name = el.vertices;
		if ( name.length != 3 || typeof name !== 'string') {
			throw new SyntaxError('Data invalid');
		}
		
		var p = (a + b + c)/2;
			
		var square = Math.round(Math.sqrt(p*(p - a)*(p - b)*(p - c)));
		obj[square] = name;
	    };


	  var arr = [];
	  var max = 0;

		for ( var key in obj) {
			arr.unshift( obj[key])
		}

		return arr ;

	} catch(e) {
		
		var error = {
            status: 'failed',
            reason: 'Enter valid data(numbers/text)'
          }

    alert  ('status: ' + error.status + ', reason: ' + error.reason);

	}
	
}



























