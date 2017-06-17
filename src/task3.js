"use strict"

var triangles = [
    { vertices: 'ABC', a: 5, b: 6, c: 9 }, 
    { vertices: 'DEF', a: 13, b: 14, c: 15 }, 
    { vertices: 'XYZ', a: 3, b: 4, c: 5}   
];


function getSquare(triangles) {
    var objOfTriangles  = {},
    i, trinagle, a, b, c,
    name, p,
    square, 
    nameOfTrinagles = [],
    key, error;

	try {
	    for (i = 0; i < triangles.length; i++) {
		    trinagle = triangles[i];
		    a = trinagle.a;
		    b = trinagle.b;
		    c = trinagle.c;
		    name = trinagle.vertices;

		    if (isNaN(a) || a <= 0 || isNaN(b) || b <= 0 || isNaN(c) || c <= 0 ||
		    	name.length != 3 || typeof name !== 'string') {
			        throw new SyntaxError('Data invalid');
		    }
		
		    p = (a + b + c) / 2;

		    square = Math.round( Math.sqrt( p * (p - a) * (p - b) * (p - c) ) );
		    objOfTriangles[square] = name;
	    };


		for (key in objOfTriangles) {
		    nameOfTrinagles.unshift(objOfTriangles[key])
		}

		return nameOfTrinagles;

	} catch(e) {
		
        error = {
            status: 'failed',
            reason: 'Enter valid data(numbers/text)'
        }

        alert  ('status: ' + error.status + ', reason: ' + error.reason);

	}
	
}