'use strict';

QUnit.test('drawBoard()', function(assert) {
    var result = task1(5, 1, '*');     
    assert.equal(result, '* * * * *', 'Result consists 1 string and 5 symbols');
});

QUnit.test('drawBoard()', function(assert) {
    var result = task1(5, 5, '*');     
    assert.equal(result, '* * * * *', 'Result consists 1 string and 5 symbols');
});

