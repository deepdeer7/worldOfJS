'use strict';

class Time {
    constructor () {
        this.state = 'clock';
    }

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

        return this.state;
    }

    start (callback) {
        callback();
        setInterval(() => callback(), 1000);
    }
}