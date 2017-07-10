'use strict';

class View {
    constructor () {
        this.element = document.querySelector('.clock-calendar');
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

        if (this.currentValue !== this.element.innerHTML) {
            this.element.innerHTML = this.currentValue;
        }
    }

    showEvents() {
        this.element.addEventListener('click', () => {
            this.time.toggleState();
            this.refreshCallback();

        });

        this.element.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.time.clickRight();
            this.refreshCallback();

        });

        this.element.addEventListener('mouseover', () => this.element.classList.toggle('color'));
        this.element.addEventListener('mouseout', () => this.element.classList.toggle('color'));
    }
}