'use strict';

// first 
console.log(task1(10,7,'w'));

// second 
let envelopeOne = {
    a: 9, 
    b: 6
}

let envelopeTwo = {
    c: 10,
    d: 40
}

console.log(task2(envelopeOne, envelopeTwo));

// third 
let triangles = [
    { vertices: 'ABC', a: 5, b: 6, c: 9 }, 
    { vertices: 'DEF', a: 13, b: 14, c: 15 }, 
    { vertices: 'XYZ', a: 3, b: 4, c: 5 }   
];

console.log(task3(triangles));

// fourth 
console.log(task4(1223454322));

// fifth 
let context = {
    min: '100000',
    max: '300100'
}

console.log(task5(context));

// sixth 
console.log(task6(4, 625));

// seventh 
let contextTwo = {
    length: 3
}

console.log(task7(contextTwo));