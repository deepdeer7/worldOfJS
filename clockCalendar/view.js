'use strict';


function View () {
    let element = document.querySelector('.clock-calendar'),
        state = 'clock';

    let startTime = () => {
let time = new Time();

    time.start(this.showTimer);
    }

        startTime();
    

    function refresh () {
        let result;
        
        if (state === 'clock') {
            result = time.getShortTime();
        } else if (state === 'full') {
            result = time.getLongTime();
        } else if (state === 'calendarUa') {
            result = time.getUaCalendar();
        } else if (state === 'calendar') {
            result = time.getEuCalendar();
        }

        return result;
    }

    this.showTimer = function () {
        let timeCash = '',
            intervalId;

        element.innerHTML = refresh();

        intervalId = setInterval(function() {
            let currentTime = refresh();

            // update only if time's changed
            if (timeCash !== currentTime) {
                element.innerHTML = currentTime;
                timeCash = currentTime;
            }
        }, 1000);
    };


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

    element.addEventListener('click', () => {
        toggleState();

        this.showTimer();
    }, false);

    element.addEventListener('contextmenu', (e) => {
        e.preventDefault();

        if (state === 'clock' || state === 'full') {
            state = 'calendar';
        } else if (state === 'calendar' || state === 'calendarUa') {
            state = 'clock';
        }

        this.showTimer();
    }, false);

    function toggleColor () {
        element.classList.toggle('color');     
    }

    element.addEventListener('mouseover', toggleColor);

    element.addEventListener('mouseout', toggleColor);
}