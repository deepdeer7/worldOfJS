'use strict';

class PetShop {
    constructor () {
        this.animals = this.initAnimals();
        this.average = this.countAverageSum();
    }

    initAnimals () {
        return [
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

    countAverageSum () {
        let length = this.animals.length,
            totalSum,
            averageSum;  

        totalSum = this.animals.reduce((sum, current) => {
             return sum + current.price;
        }, 0);

        averageSum = totalSum / length

        return averageSum;
    }

    createListOfCats () {
        let listOfCats = this.animals.filter((pet) => {
            return pet instanceof Cat;
        })

        return listOfCats;
    }

    createListOfExpensive () {
        let listOfExpensive = this.animals.filter((pet) => {
            return pet.price > this.average;
        });

        return listOfExpensive;
    }

    createListWhiteAndFluffy () {
        let listOfWhiteAndFluffy = this.animals.filter((pet) => {
            return (pet.isFluffy || pet.color === 'white');
        });

        return listOfWhiteAndFluffy;
    }
}