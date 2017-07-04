'use strict';

class PetShopView extends PetShop {
    constructor () {
        super();
        this.petShop = document.querySelector('.PetShop');
    }

    generateTextOfCats () {
        this.createListOfCats();

        this.makeList(`All cats which we have in our shop:`, this.listOfCats);
    }

    generateGreaterThanAverage () {
        this.createListOfGreaterThanAverage();

        this.makeList(`All pets which price greater than average:`,
            this.namesOfGreaterThanAverage.split(' '));
    }

    generateTextOfWhiteOrFluffy () {
        this.createListWhiteOrFluffy();

        this.makeList(`All pets which fluffy or have white color:`,
            this.namesOfWhiteOrFluffy.split(' '));
    }

    makeList (header, list) {
        let element = document.createElement('div'),
            li = ``,
            ul = ``,
            text = ``;

        list.forEach((name) => {
            li += `<li> ${name} </li>`;
        });

        ul = `<ul>${li}</ul>`;
        text = `<h2>${header}</h2>${ul}`;

        element.innerHTML = text;
        element.classList.add('column');
        this.petShop.appendChild(element);

        return element;
    }

    viewPets () {
        this.generateTextOfCats();
        this.generateGreaterThanAverage();
        this.generateTextOfWhiteOrFluffy();
    }
}