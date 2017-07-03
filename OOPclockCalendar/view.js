'use strict';



class View {
    constructor () {
        this.element = document.querySelector('.clock-calendar');
        this.state = 'clock';

        this.element.addEventListener('click', () => {
            this.toggleState();

            this.showTimer();
        });

        this.element.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            if (this.state === 'clock' || this.state === 'full') {
                this.state = 'calendar';
            } else if (this.state === 'calendar' || this.state === 'calendarUa') {
                this.state = 'clock';
            }

            this.showTimer();
        });

        this.element.addEventListener('mouseover', () =>  this.element.classList.toggle('color'));

        this.element.addEventListener('mouseout', () =>  this.element.classList.toggle('color'));
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

        this.element.innerHTML = this.refresh();

        intervalId = setInterval(() => {
            let currentTime = this.refresh();

            // update only if time's changed
            if (timeCash !== currentTime) {
                this.element.innerHTML = currentTime;
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
}