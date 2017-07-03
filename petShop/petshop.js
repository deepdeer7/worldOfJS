'use strict';

class PetShop {
    constructor () {
        this.listOfCats = [];
        this.average = 0;
        this.namesOfWhiteOrFluffy = '';
        this.namesOfGreaterThanAverage = '';

        this.arrayOfAnimal = [
            new Dog('green', 100, 'Patrick'),
            new Dog('white', 50, 'Dave'),
            new Dog('blue', 70, 'Seno'),
            new Cat('white', 120, 'Sasha', true),
            new Cat('pink', 70, 'Anya', false),
            new Cat('black', 95, 'Vasya', true),
            new Hamster('white', 100, false),
            new Hamster('orange', 70, true),
            new Hamster('brown', 60, false),
            new Hamster('white', 120, false)
        ];
    }

    createListOfCats () {
        this.arrayOfAnimal.forEach((animal) => {
            if (animal instanceof Cat) {
                this.listOfCats.push(animal.name);
            }
        });

        return this.listOfCats;
    }

    countAveragePrice () {
        let sum = 0;

        this.arrayOfAnimal.forEach((animal) => {
            sum += animal.price;
        });

        this.average = sum / this.arrayOfAnimal.length;

        return this.average;
    }

    createListOfGreaterThanAverage () {
        this.arrayOfAnimal.forEach((animal) => {
            if (animal.price > this.countAveragePrice()) {
                if (animal.name) {
                    this.namesOfGreaterThanAverage += `${animal.name} `;
                } else {
                    this.namesOfGreaterThanAverage += `Hamster `;
                }         
            }
        });

        return this.namesOfGreaterThanAverage;
    }

    createListWhiteOrFluffy () {
        this.arrayOfAnimal.forEach((animal) => {
            if (animal.isFluffy || animal.color === 'white') {
                if (animal.name) {
                    this.namesOfWhiteOrFluffy += `${animal.name} `;
                } else {
                    this.namesOfWhiteOrFluffy += `Hamster `;
                }
            }
        });

        return this.namesOfWhiteOrFluffy;
    }
}