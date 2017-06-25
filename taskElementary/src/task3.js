'use strict';

function task3 (triangles) {
    let result;

    try {
        preValideate(triangles);
        result = getReversedNames(triangles);
    } catch (err) {
        result = {status: 'failed', reason: err};
    }

    return result;
}

function getReversedNames (triangles) {
    let objOfTriangles = {},
        nameOfTrinagles = [],
        resultOfReversedNames;

    triangles.forEach(fillObjOfTriangles);

    function fillObjOfTriangles (triangle) {
        let a = triangle.a,
            b = triangle.b,
            c = triangle.c,
            p = (a + b + c) / 2,
            area = Math.round(Math.sqrt(p * (p - a) * (p - b) * (p - c)));

        objOfTriangles[area] = triangle.vertices;
    }

    // object sorts keys by increasing
    for (let key in objOfTriangles) {
        nameOfTrinagles.push(objOfTriangles[key]);
    }

    resultOfReversedNames = nameOfTrinagles.reverse();
    return resultOfReversedNames;
}

function preValideate (triangles) {
    if (typeof triangles !== 'object') {
        throw 'enter the object';
    }

    triangles.forEach(preValidateData);
}

function preValidateData (triangle) {
    if (typeof triangle.a !== 'number' ||
        typeof triangle.a !== 'number' ||
        typeof triangle.a !== 'number') {

        throw 'enter numbers';
    }

    if (triangle.a <= 0 || triangle.b <= 0 ||
        triangle.c <= 0) {

        throw 'enter positive numbers';
    }

    if (typeof triangle.vertices !== 'string' ||
        triangle.vertices.length !== 3) {

        throw 'enter string length of 3 symbols';
    }
} 