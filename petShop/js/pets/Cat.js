'use strict';

class Cat extends Pet {
    constructor (color, price, name, isFluffy) {
        super(color, price);
        this._name = name;
        this._isFluffy = isFluffy;
    }

      get isFluffy () {
    	return this._isFluffy;
    }

    set isFluffy (value) {
    	if (typeof value !== 'boolean') {
            return;
        } 

    	this._isFluffy = value;
    }

    get name () {
    	return this._name;
    }

    set name (value) {
    	if (typeof value !== 'string') {
            return;
        } 

    	this._name = value;
    }
}