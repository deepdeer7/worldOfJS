'use strict';

function Time () {
    let date = new Date(),
        fullYear,
        shortYear,
        month,
        day,
        hours,
        minutes,
        seconds;

    this.start = function() {
        fullYear = normalizeDate(date.getFullYear()),
        shortYear = normalizeDate(date.getFullYear() % 100),
        month = normalizeDate(date.getMonth() + 1),
        day = normalizeDate(date.getDate()),
        hours = normalizeDate(date.getHours()),
        minutes = normalizeDate(date.getMinutes()),
        seconds = normalizeDate(date.getSeconds());
    }
        

    function normalizeDate (parameter) {
        if (parameter < 10) {
            parameter = `0${parameter}`;
        }

        return parameter;
    }

    this.getUaCalendar = function () {
        return `${day}:${month}:${fullYear}`;
    }

    this.getEuCalendar = function () {
        return `${month}/${day}/${shortYear}`;
    }

    this.getLongTime = function () {
        return `${hours}:${minutes}:${seconds}`;
    }

    this.getShortTime = function () {
        return `${hours}:${minutes}`;
    }


    return this;
}