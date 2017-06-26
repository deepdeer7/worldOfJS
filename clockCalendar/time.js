'use strict';

function Time () {
    let date = new Date(),

    year = normalizeDate(date.getFullYear() % 100),
    month = normalizeDate(date.getMonth() + 1),
    day = normalizeDate(date.getDate()),
    hours = normalizeDate(date.getHours()),
    minutes = normalizeDate(date.getMinutes()),
    seconds = normalizeDate(date.getSeconds());

    function normalizeDate (parametr) {
        if (parametr < 10) {
            parametr = `0${parametr}`;
        }

        return parametr;
    }

    this.getYear = function () {
        return year;
    };

    this.getMonth = function () {
        return month;
    };

    this.getDay = function () {
        return day;
    };

    this.getHours = function () {
        return hours;
    };

    this.getMinutes = function () {
        return minutes;
    };

    this.getSeconds = function () {
        return seconds;
    };

    return this;
}