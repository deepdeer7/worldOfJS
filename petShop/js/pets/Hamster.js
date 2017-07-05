'use strict';

class Hamster extends Pet {
    constructor (color, price, isFluffy) {
        super(color, price);
        this._isFluffy = isFluffy;
    }

    get isFluffy () {
    	return this._isFluffy;
    }

    set isFluffy (value) {
    	if (typeof value !== 'boolean') return;

    	this._isFluffy = value;
    }
}