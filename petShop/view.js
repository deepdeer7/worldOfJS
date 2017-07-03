'use strict';

class PetShopView extends PetShop {
    constructor () {
        super();
        this.petShop = document.querySelector('.PetShop');
    }

    generateTextOfCats () {
        let listFirst = document.createElement('div');

        this.createListOfCats();
        this.makeList(listFirst, `All cats which we have in our shop:`, this.listOfCats);
    }

    generateGreaterThanAverage () {
        let listThird = document.createElement('div');

        this.createListOfGreaterThanAverage();
        this.makeList(listThird, `All pets which price greater than average:`,
            this.namesOfGreaterThanAverage.split(' '));
    }

    generateTextOfWhiteOrFluffy () {
        let listSecond = document.createElement('div');

        this.createListWhiteOrFluffy();
        this.makeList(listSecond, `All pets which fluffy or have white color:`,
            this.namesOfWhiteOrFluffy.split(' '));
    }

    makeList (element, header, list) {
        let li = ``,
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