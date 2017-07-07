'use strict';

class View extends HTMLElement {
    constructor () {
        super();
    }

    start () {
        this.state = 'clock';
        this.clockOrCalendar = this.createShadowRoot();
    }

    refresh () {
        let result,
            time = new Time();
        
        if (this.state === 'clock') {
            result = time.shortTime;
        } else if (this.state === 'full') {
            result = time.longTime;
        } else if (this.state === 'calendarUa') {
            result = time.uaCalendar;
        } else if (this.state === 'calendar') {
            result = time.euCalendar;
        }

        return result;
    }

    showTimer () {
        let timeCash = '',
            intervalId;

        this.clockOrCalendar.innerHTML = this.refresh();

        intervalId = setInterval(() => {
            let currentTime = this.refresh();

            // update only if time's changed
            if (timeCash !== currentTime) {
                this.clockOrCalendar.innerHTML = currentTime;
                timeCash = currentTime;
            }
        }, 1000);
    };

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

        showEvents() {
        let clickRightButton,
            clickLeftButton,
            toggle;

        clickRightButton = (e) => {
            e.preventDefault();

            if (this.state === 'clock' || this.state === 'full') {
                this.state = 'calendar';
            } else if (this.state === 'calendar' || this.state === 'calendarUa') {
                this.state = 'clock';
            }

            this.showTimer();
        }

        clickLeftButton = () => {
            this.toggleState();

            this.showTimer();
        }

        toggle = () =>  this.classList.toggle('color');

        this.addEventListener('click', clickLeftButton);

        this.addEventListener('contextmenu', clickRightButton);

        this.addEventListener('mouseover', toggle);

        this.addEventListener('mouseout', toggle);
    }

}