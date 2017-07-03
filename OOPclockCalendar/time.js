'use strict';

class Time {

    constructor () {
        this.date = new Date();
        this.fullYear = this.normalizeDate(this.date.getFullYear());
        this.shortYear = this.normalizeDate(this.date.getFullYear() % 100);
        this.month = this.normalizeDate(this.date.getMonth() + 1);
        this.day = this.normalizeDate(this.date.getDate());
        this.hours = this.normalizeDate(this.date.getHours());
        this.minutes = this.normalizeDate(this.date.getMinutes());
        this.seconds = this.normalizeDate(this.date.getSeconds());
    }

    normalizeDate (parameter) {
        if (parameter < 10) {
            parameter = `0${parameter}`;
        }

        return parameter;
    }

    get uaCalendar () {
        return `${this.day}:${this.month}:${this.fullYear}`;
    }

    get euCalendar () {
        return `${this.month}/${this.day}/${this.shortYear}`;
    }

    get longTime () {
        return `${this.hours}:${this.minutes}:${this.seconds}`;
    }

    get shortTime () {
        return `${this.hours}:${this.minutes}`;
    }
};


