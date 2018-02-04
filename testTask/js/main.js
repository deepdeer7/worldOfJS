'use strict';

document.addEventListener('DOMContentLoaded', main, false);

function main () {
    let view = new ViewTable();
  
    view.showTable();
    view.addEventListeners();
}
