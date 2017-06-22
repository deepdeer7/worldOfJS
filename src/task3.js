'use strict';

var triangles = [
    { vertices: 'ABC', a: 's', b: 6, c: 9 }, 
    { vertices: 'DEF', a: 13, b: 14, c: 15 }, 
    { vertices: 'XYZ', a: 3, b: 4, c: 5 }   
];

function task3 (triangles) {
    var result;

    try {
        preValideate(triangles);
        result = getSquare(triangles);
    } catch (err) {
        result = {status: 'failed', reason: err};
    }

    return result;
}

function getSquare (triangles) {
    var objOfTriangles  = {},
    i, trinagle, a, b, c,
    name, p,
    square, 
    nameOfTrinagles = [],
    key;

        for (i = 0; i < triangles.length; i++) {
            trinagle = triangles[i];
            a = trinagle.a;
            b = trinagle.b;
            c = trinagle.c;
            name = trinagle.vertices;

            p = (a + b + c) / 2;

            square = Math.round(Math.sqrt(p * (p - a) * (p - b) * (p - c)));
            objOfTriangles[square] = name;
        };

        for (key in objOfTriangles) {
            nameOfTrinagles.unshift(objOfTriangles[key])
        }

        return nameOfTrinagles;
}

function preValideate (triangles) {
    var trinagle,
    a, b, c,
    name,
    i;

    for (i = 0; i < triangles.length; i++) {
        trinagle = triangles[i];
        a = trinagle.a;
        b = trinagle.b;
        c = trinagle.c;
        name = trinagle.vertices;

        if (typeof a !== 'number' || typeof b !== 'number'
            || typeof c !== 'number') {
            throw 'enter numbers pleeze';
        }

        if (a <= 0 || b <= 0 || c <= 0) {
            throw 'enter positive numbers';    
        }

        if (typeof name !== 'string' || name.length != 3) {
            throw 'name must have 3 symbols'
        }
    }
}