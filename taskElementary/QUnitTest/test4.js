'use strict';

QUnit.test('check of availability palindrom(max)', function(assert) {
    var result = task4(123454321);     
    assert.equal(result, 123454321, 'Palindrom was found');
});

QUnit.test('check of availability palindrom(max)', function(assert) {
    var result = task4(12345678987658933);     
    assert.equal(result, 567898765, 'Palindrom was found');
});

QUnit.test('check of availability palindrom(max)', function(assert) {
    var result = task4(12345678);     
    assert.equal(result, 'no palindroms', 'Palindrom wasnt found');
});

QUnit.test('check of availability palindrom(max)', function(assert) {
    var result = task4(1);     
    assert.equal(result, 'no palindroms', 'Palindrom wasnt found');
});

QUnit.test('check of availability palindrom(max)', function(assert) {
    var result = task4(44488889999999);     
    assert.equal(result, '9999999', 'Palindrom was found');
});