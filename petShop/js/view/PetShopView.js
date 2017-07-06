'use strict';

class PetShopView {
    constructor () {
        this.element = document.querySelector('.PetShop');
        this.petShop = new PetShop();
    }

    showAllLists () {
        let firstDiv = this.getTemplate(`All cats which we have in our shop:`, this.petShop.createListOfCats());
        let secondDiv = this.getTemplate(`All pets which price greater than average:`, this.petShop.createListOfExpensive());
        let thirdDiv = this.getTemplate(`All pets which fluffy or have white color:`, this.petShop.createListWhiteAndFluffy());

        this.element.innerHTML = `${firstDiv}${secondDiv}${thirdDiv}`;
    }

    getTemplate (header, list) {
        let li = ``;

        list.forEach((pet) => {
            let json = pet.toJSON();
            li += `<li> ${json['name'] || `Hamster`} </li>`;

        });

        return `<div class = 'column'>
                    <h2>${header}</h2>
                    <ul>
                        ${li}
                    </ul>
                <div>`; 
    } 
}