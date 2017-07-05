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
    	if (typeof value !== 'string') return;
    	
    	this._color = value;
    }

    get price () {
    	return this._price;
    }

    set price (value) {
    	if (typeof value !== 'number') return;

    	return this._price;
    }
}
