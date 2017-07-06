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
    	if (typeof value !== 'boolean') {
            return;
        } 

    	this._isFluffy = value;
    }

    isFluffyPet () {
        return this._isFluffy === true;
    }
    
    isFluffyOrWhite () {
        return this.isFluffyPet() || this.isColorWhite();
    }

    toJSON () {
        return {
            color: this._color,
            price: this._price,
            isFluffy: this._isFluffy
        };
    }
}