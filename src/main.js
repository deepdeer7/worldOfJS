'use strict';

// first 
console.log(drawBoard(10,7,'w'));

// second 
var envelopeOne = {
    a: 9, 
    b: 6
}

var envelopeTwo = {
    c: 10,
    d: 40
}

console.log(putIn(envelopeOne, envelopeTwo));


// third 
var triangles = [
    { vertices: 'ABC', a: 5, b: 6, c: 9 }, 
    { vertices: 'DEF', a: 13, b: 14, c: 15 }, 
    { vertices: 'XYZ', a: 3, b: 4, c: 5 }   
];

console.log(task3(triangles));

// fourth 
console.log(task4(1223454322));

// fifth 
var context = {
    min: '100000',
    max: '300100'
}

console.log(task5(context));

// sixth 
console.log(getRow(4, 625));

// seventh 
var contextTwo = {
    length: 3
}

console.log(countFib(contextTwo));