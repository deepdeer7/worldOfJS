'use strict';

class View extends HTMLElement {
    constructor () {
        super();
    }
    start () {
        this.clockOrCalendar = this.createShadowRoot();
        this.time = new Time();
        this.outputState;
    }

    refresh () {
        if (this.time.state === 'clock') {
            this.outputState = this.time.getTime('shortTime');
        } else if (this.time.state === 'full') {
            this.outputState = this.time.getTime('longTime');
        } else if (this.time.state === 'calendarUa') {
            this.outputState = this.time.getCalendar('uaCalendar');
        } else if (this.time.state === 'calendar') {
            this.outputState = this.time.getCalendar('euCalendar');
        }

        return this.outputState;
    }

    showTime () {
        this.time.start(() => this.refreshCallback());
    }

    refreshCallback () {
        this.currentValue = this.refresh();

        if (this.currentValue !== this.clockOrCalendar.innerHTML) {
            this.clockOrCalendar.innerHTML = this.currentValue;
        }
    }

    showEvents() {
        this.addEventListener('click', () => {
            this.time.toggleState();
            this.refreshCallback();

        });

        this.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.time.clickRight();
            this.refreshCallback();

        });

        this.addEventListener('mouseover', () => this.classList.toggle('color'));
        this.addEventListener('mouseout', () => this.classList.toggle('color'));
    }

    attachedCallback () {
        this.start();
        this.showTime();
        this.showEvents();
    }
}