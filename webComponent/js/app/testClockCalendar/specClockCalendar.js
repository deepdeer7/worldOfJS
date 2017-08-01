describe('clock and calendar', function () {
    let clockCalendar,
        time;

    beforeEach(function () {
        time = new ClockCalendar();
    });

    describe('normalize time', function () {
        let date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds();

        function normalizeDate (parameter) {
            if (parameter < 10) {
                parameter = `0${parameter}`;
            }

            return parameter;
        }

        it('should normalize time in short format', function () {
            expect(time.getTime('shortTime'))
                .toBe(`${normalizeDate(hours)}:${normalizeDate(minutes)}`);
        });

        it('should normalize time in long format', function () {
            expect(time.getTime('longTime'))
                .toBe(`${normalizeDate(hours)}:${normalizeDate(minutes)}:${normalizeDate(seconds)}`);
        });
    });

    describe('normalize date', function () {
        let date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate();

        function normalizeDate (parameter) {
            if (parameter < 10) {
                parameter = `0${parameter}`;
            }

            return parameter;
        }

        it('should normalize date in UA calendar format', function () {
            expect(time.getCalendar('uaCalendar'))
                .toBe(`${normalizeDate(day)}:${normalizeDate(month)}:${year}`);
        });

        it('should normalize time in Europe calendar format', function () {
            expect(time.getCalendar('euCalendar'))
                .toBe(`${normalizeDate(month)}/${normalizeDate(day)}/${normalizeDate(year % 100)}`);
        });
    });

    it('should normalize date', function () {
        expect(time.normalizeDate(10)).toEqual(10);
        expect(time.normalizeDate(7)).toEqual('07');
    });

    describe('toggle state', function () {
        it('should correct change state', function () {
             time.state = 'full';
             expect(time.toggleState()).toBe('clock');
        });

        it('should correct change state', function () {
             time.state = 'clock';
             expect(time.toggleState()).toBe('full');
        });

        it('should correct change state', function () {
             time.state = 'calendar';
             expect(time.toggleState()).toBe('calendarUa');
        });

        it('should correct change state', function () {
             time.state = 'calendarUa';
             expect(time.toggleState()).toBe('calendar');
        });
    });

    describe('right click', function () {
        it('should correct change state by right click', function () {
            time.state = 'clock';

            expect(time.clickRight()).toBe('calendar');
        });

        it('should correct change state by right click', function () {
            time.state = 'calendar';

            expect(time.clickRight()).toBe('clock');
        });
    });
});
