'use strict';

class PetShopView {
    constructor () {
        this.element = document.querySelector('.PetShop');
        this.petShop = new PetShop();
    }

    showAllLists () {
        this.createList(`All cats which we have in our shop:`, this.petShop.createListOfCats());
        this.createList(`All pets which price greater than average:`, this.petShop.createListOfExpensive());
        this.createList(`All pets which fluffy or have white color:`, this.petShop.createListWhiteAndFluffy());
    }

    createList (header, list) {
        let li = ``,
            text = ``;

        list.forEach((pet) => {
            li += `<li> ${pet.name || `Hamster`} </li>`;
        });

        text = `<div class = 'column'>
                    <h2>${header}</h2>
                    <ul>
                        ${li}
                    </ul>
                <div>`;

        this.element.innerHTML += text;
    }
}