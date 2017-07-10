'use strict';

class Cat extends Pet {
    constructor (color, price, name, isFluffyness) {
        super(color, price);
        this._name = name;
        this._isFluffyness = isFluffyness;
    }

    get isFluffy () {
    	return this._isFluffy;
    }

    set isFluffy (value) {
    	if (value < 0 || value > 10) {
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

    isFluffyPet () {
        if (this._isFluffyness > 2 && this._isFluffyness < 10) {
            return true;
        }
    }
}