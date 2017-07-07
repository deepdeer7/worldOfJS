'use strict';

document.addEventListener('DOMContentLoaded', main, false);

function main () {
    let El = document.registerElement('clock-calendar', View),
        view = new El();

    document.body.appendChild(view);

	view.start();
    view.showTimer();
    view.showEvents();
}