'use strict';

QUnit.test('numbers Fibbonachi with specified length', function(assert) {
    var result = task7({length: 3});     
    assert.deepEqual(result, [144, 233, 377, 610, 987], 'numbers Fibbonachi have length 3 symbols');
});

QUnit.test('numbers Fibbonachi with specified length', function(assert) {
    var result = task7({length: 1});     
    assert.deepEqual(result, [1, 1, 2, 3, 5, 8], 'numbers Fibbonachi have length 1 symbols');
});

QUnit.test('numbers Fibbonachi with specified range', function(assert) {
    var result = task7({min: 31, max: 100});     
    assert.deepEqual(result, [34, 55, 89], 'numbers Fibbonachi have range from 31 to 100');
});

QUnit.test('numbers Fibbonachi with specified range', function(assert) {
    var result = task7({min: 1000, max: 2000});     
    assert.deepEqual(result, [1597], 'numbers Fibbonachi have range from 1000 to 2000');
});
