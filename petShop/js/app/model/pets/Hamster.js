'use strict';

class Hamster extends Pet {
    constructor (color, price, isFluffyness) {
        super(color, price);
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

    isFluffyPet () {
        if (this._isFluffyness > 5 && this._isFluffyness < 10) {
            return true;
        }
    }
}