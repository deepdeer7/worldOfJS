'use strict';

QUnit.test('test of output triangles', function(assert) {
    var result = task3([ {vertices: 'ABC', a: 3, b: 4, c: 5}, 
                         {vertices: 'DEF', a: 5, b: 6, c: 9}, 
                         {vertices: 'XYZ', a: 13, b: 14, c: 15}] );     
    assert.deepEqual(result, ['XYZ', 'DEF', 'ABC'],
    'Reversing output of triangle squares works');
});

QUnit.test('test of output triangles', function(assert) {
    var result = task3([ {vertices: 'ABC', a: 7, b: 15, c: 16.55}, 
                         {vertices: 'DEF', a: 9, b: 11, c: 14.21}, 
                         {vertices: 'XYZ', a: 43, b: 49, c: 65.19}] );     
    assert.deepEqual(result, ['XYZ', 'ABC', 'DEF'],
    'Reversing output of triangle squares works');
});

QUnit.test('test of output triangles', function(assert) {
    var result = task3([ {vertices: 'ABC', a: 67, b: 89, c: 111.4}, 
                         {vertices: 'DEF', a: 34, b: 76, c: 83.26}, 
                         {vertices: 'XYZ', a: 3, b: 7, c: 7.62}] );     
    assert.deepEqual(result, ['ABC', 'DEF', 'XYZ'],
    'Reversing output of triangle squares works');
});

QUnit.test('test of output triangles', function(assert) {
    var result = task3([ {vertices: 'ABC', a: 'd67', b: 89, c: 111.4}, 
                         {vertices: 'DEF', a: 34, b: 76, c: 83.26}, 
                         {vertices: 'XYZ', a: 3, b: 7, c: 7.62}] );     
    assert.deepEqual(result, {"reason": "enter numbers", "status": "failed"},
    'Reversing output of triangle squares doesnt work');
});

QUnit.test('test of output triangles', function(assert) {
    var result = task3([ {vertices: 'WABC', a: 67, b: 89, c: 111.4}, 
                         {vertices: 'DEF', a: 34, b: 76, c: 83.26}, 
                         {vertices: 'XYZ', a: 3, b: 7, c: 7.62}] );     
    assert.deepEqual(result, {"reason": "enter string length of 3 symbols", "status": "failed"},
    'Reversing output of triangle squares doesnt work');
});

QUnit.test('test of output triangles', function(assert) {
    var result = task3([ {vertices: 'ABC', a: 3, b: 4, c: 5}, 
                         {vertices: 'DEF', a: -5, b: 6, c: 9}, 
                         {vertices: 'XYZ', a: 13, b: 14, c: 15}] );     
    assert.deepEqual(result, {"reason": "enter positive numbers", "status": "failed"}, 
    'Reversing output of triangle squares doesnt work');
});
