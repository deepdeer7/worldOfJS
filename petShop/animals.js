'use strict';

class Pet {
    constructor (color, price) {
        this.color = color;
        this.price = price;
    }
}

class Dog extends Pet {
    constructor (color, price, name) {
        super(color, price);
        this.name = name;
    }
}

class Cat extends Pet {
    constructor (color, price, name, isFluffy) {
        super(color, price);
        this.name = name;
        this.isFluffy = isFluffy;
    }
}

class Hamster extends Pet {
    constructor (color, price, isFluffy) {
        super(color, price);
        this.isFluffy = isFluffy;
    }
}