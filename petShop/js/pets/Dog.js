'use strict';

class Dog extends Pet {
    constructor (color, price, name) {
        super(color, price);
        this._name = name;
    }

    get name () {
    	return this._name;
    }

    set name (value) {
    	if (typeof value !== 'string') return;

    	this._name = value;
    }
}