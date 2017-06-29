'use strict';

QUnit.test('result of geting row', function(assert) {
    var result = task6(6, 1);     
    assert.equal(result, '2,3,4,5,6,7', 'Result consists of 6 numbers');
});

QUnit.test('result of geting row', function(assert) {
    var result = task6(1, 10);     
    assert.equal(result, '4', 'Result consists of 1 number');
});

QUnit.test('result of geting row', function(assert) {
    var result = task6(3, 0);     
    assert.equal(result, '1,2,3', 'Result consists of 3 number');
});