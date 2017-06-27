'use strict';

function View () {
    let element = document.querySelector('.clock-calendar'),
        state = 'clock',

        fullYear,
        shortYear,
        month,
        day,
        hours,
        minutes,
        seconds;

    function updateTime () {
        let time = new Time();

        fullYear = time.getYear();
        shortYear = time.getShortYear();
        month = time.getMonth();
        day = time.getDay();
        hours = time.getHours();
        minutes = time.getMinutes();
        seconds = time.getSeconds();

        return time;
    }

    function refresh () {
        let result;

        updateTime();
        
        if (state === 'clock') {
            result = getShortTime();
        } else if (state === 'full') {
            result = getLongTime();
        } else if (state === 'calendarUa') {
            result = getUaCalendar();
        } else if (state === 'calendar') {
            result = getEuCalendar();
        }

        return result;
    }

    function getUaCalendar () {
        return `${day}:${month}:${fullYear}`;
    }

    function getEuCalendar () {
        return `${month}/${day}/${shortYear}`;
    }

    function getLongTime () {
        return `${hours}:${minutes}:${seconds}`;
    }

    function getShortTime () {
        return `${hours}:${minutes}`;
    }

    this.showTimer = function () {
        let timeCash = '',
            intervalId;

        element.innerHTML = refresh();

        intervalId = setInterval(function() {
            let currentTime = refresh();

            if (timeCash !== currentTime) {
                element.innerHTML = currentTime;
                timeCash = currentTime;
            }
        }, 1000);
    };

    element.addEventListener('click', function () {
        toggleState();

        this.showTimer();
    }.bind(this), false);

    function toggleState () {
        if (state === 'clock') {
            state = 'full';
        } else if (state === 'full') {
            state = 'clock';
        } else if (state === 'calendar') {
            state = 'calendarUa';
        } else if (state === 'calendarUa') {
            state = 'calendar';
        }

        return state;    
    }

    element.addEventListener('contextmenu', function (e) {
        e.preventDefault();

        if (state === 'clock' || state === 'full') {
            state = 'calendar';
        } else if (state === 'calendar' || state === 'calendarUa') {
            state = 'clock';
        }

        this.showTimer();
    }.bind(this), false);

    function toggleColor () {
        element.classList.toggle('color');     
    }

    element.addEventListener('mouseover', toggleColor);

    element.addEventListener('mouseout', toggleColor);
}