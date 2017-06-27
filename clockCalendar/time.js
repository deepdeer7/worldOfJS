'use strict';

function Time () {
    let date = new Date(),

        fullYear = normalizeDate(date.getFullYear()),
        shortYear = normalizeDate(date.getFullYear() % 100),
        month = normalizeDate(date.getMonth() + 1),
        day = normalizeDate(date.getDate()),
        hours = normalizeDate(date.getHours()),
        minutes = normalizeDate(date.getMinutes()),
        seconds = normalizeDate(date.getSeconds());

    function normalizeDate (parameter) {
        if (parameter < 10) {
            parameter = `0${parameter}`;
        }

        return parameter;
    }

    this.getYear = function () {
        return fullYear;
    };

    this.getShortYear = function () {
        return shortYear;
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