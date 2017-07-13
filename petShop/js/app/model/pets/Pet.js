'use strict';

class Pet {
    constructor (color, price) {
        this._color = color;
        this._price = price;
    }

    get color () {
    	return this._color;
    }

    set color (value) {
    	if (typeof value !== 'string') {
            return;
        } 
    	
    	this._color = value;
    }

    get price () {
    	return this._price;
    }

    set price (value) {
    	if (typeof value !== 'number') {
            return;
        }

    	this._price = value;
    }

    isColorWhite () {
        let color = 'white';
        return this._color === color;
    }

    isFluffyPet () {
        return undefined;
    }

    isFluffyOrWhite () {
        return this.isFluffyPet() || this.isColorWhite();
    }
}
