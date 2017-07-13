'use strict';

class ClockCalendar extends HTMLElement {
    normalizeDate (parameter) {
        if (parameter < 10) {
            parameter = `0${parameter}`;
        }

        return parameter;
    }

    getTime (format) {
        let result,
            date = new Date(),
            hours = this.normalizeDate(date.getHours()),
            minutes = this.normalizeDate(date.getMinutes()),
            seconds = this.normalizeDate(date.getSeconds());

        if (format === 'longTime') {
            result = `${hours}:${minutes}:${seconds}`;
        } else if (format === 'shortTime') {
            result = `${hours}:${minutes}`;
        }

        return result;
    }

    getCalendar (format) {
        let result,
            date = new Date(),
            year = date.getFullYear(),
            month = this.normalizeDate(date.getMonth() + 1),
            day = this.normalizeDate(date.getDate());

        if (format === 'uaCalendar') {
            result = `${day}:${month}:${year}`;    
        } else if (format === 'euCalendar') {
            result = `${month}/${day}/${this.normalizeDate(year % 100)}`;
        }

        return result;
    }

    toggleState () {
        if (this.state === 'clock') {
            this.state = 'full';
        } else if (this.state === 'full') {
            this.state = 'clock';
        } else if (this.state === 'calendar') {
            this.state = 'calendarUa';
        } else if (this.state === 'calendarUa') {
            this.state = 'calendar';
        }

        return this.state;    
    }

    clickRight () {
        if (this.state === 'clock' || this.state === 'full') {
            this.state = 'calendar';
        } else if (this.state === 'calendar' || this.state === 'calendarUa') {
            this.state = 'clock';
        }
    }

    startTime (callback) {
        callback();
        setInterval(() => callback(), 1000);
    }

    start () {
        this.clockOrCalendar = this.createShadowRoot();
        this.outputState;
        this.state = 'clock';
    }

    refresh () {
        if (this.state === 'clock') {
            this.outputState = this.getTime('shortTime');
        } else if (this.state === 'full') {
            this.outputState = this.getTime('longTime');
        } else if (this.state === 'calendarUa') {
            this.outputState = this.getCalendar('uaCalendar');
        } else if (this.state === 'calendar') {
            this.outputState = this.getCalendar('euCalendar');
        }

        return this.outputState;
    }

    showTime () {
        this.startTime(() => this.refreshCallback());
    }

    refreshCallback () {
        this.currentValue = this.refresh();

        if (this.currentValue !== this.clockOrCalendar.innerHTML) {
            this.clockOrCalendar.innerHTML = this.currentValue;
        }
    }

    showEvents() {
        this.addEventListener('click', () => {
            this.toggleState();
            this.refreshCallback();

        });

        this.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.clickRight();
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