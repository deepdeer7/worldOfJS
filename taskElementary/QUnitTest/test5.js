'use strict';

QUnit.test('Test of lucky tickets', function(assert) {
    var result = task5({min: '100000', max: '100100'});     
    assert.equal(result, 'difficult:8', 'more lucky tickets were counted by difficult way');
});

QUnit.test('Test of lucky tickets', function(assert) {
    var result = task5({min: '200000', max: '400100'});     
    assert.equal(result, 'simple:11511', 'more lucky tickets were counted by simple way');
});


QUnit.test('Test of lucky tickets', function(assert) {
    var result = task5({min: '500000', max: '504500'});     
    assert.equal(result, 'difficult:170', 'more lucky tickets were counted by difficult way');
});

