'use strict';

class PetShop {
    constructor () {
        this.animals = this.initAnimals();
    }

    initAnimals () {
        return [
            new Dog('green', 100, 'Patrick'),
            new Dog('white', 50, 'Dave'),
            new Dog('blue', 70, 'Seno'),
            new Cat('white', 120, 'Sasha', 3),
            new Cat('pink', 70, 'Anya', 7),
            new Cat('black', 95, 'Vasya', 9),
            new Hamster('white', 100, 4),
            new Hamster('white', 70, 1),
            new Hamster('brown', 60, 6),
            new Hamster('white', 120, 1)
        ];
    }

    countAverageSum () {
        let length = this.animals.length,
            totalSum;  

        totalSum = this.animals.reduce((sum, current) => {
             return sum + current.price;
        }, 0);

        return totalSum / length;
    }

    createListOfCats () {
        return this.animals.filter((pet) => {
            return pet instanceof Cat;
        });
    }

    createListOfExpensive () {
        let average = this.countAverageSum();

        return this.animals.filter((pet) => {
            return pet.price > average;
        });
    }

    createListWhiteAndFluffy () {
        return this.animals.filter((pet) => {
            return (pet.isFluffyOrWhite());
        });
    }
}