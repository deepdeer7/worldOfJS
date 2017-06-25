'use strict';

QUnit.test('attachment is made', function(assert) {
    var result = task2({a: 20, b: 40}, {c: 10, d: 15});     
    assert.equal(result, 2, 'It works! Second is smaller.');
});

QUnit.test('attachment is made', function(assert) {
    var result = task2({a: 4, b: 6}, {c: 3.78, d: 2.67});     
    assert.equal(result, 2, 'It works! Second is smaller.');
});

QUnit.test('attachment is made', function(assert) {
    var result = task2({a: 20, b: 40}, {c: 60, d: 95});     
    assert.equal(result, 1, 'It works! First is smaller.');
});

QUnit.test('attachment is made', function(assert) {
    var result = task2({a: 1, b: 6}, {c: 10.78, d: 12.67});     
    assert.equal(result, 1, 'It works! First is smaller.');
});

QUnit.test('attachment isnt made', function(assert) {
    var result = task2({a: 20, b: 40}, {c: 41, d: 15});     
    assert.equal(result, 0, 'Iat doesnt work!');
});

QUnit.test('attachment isnt made', function(assert) {
    var result = task2({a: 4, b: 6}, {c: 3.78, d: 10.67});     
    assert.equal(result, 0, 'It doesnt work!');
});