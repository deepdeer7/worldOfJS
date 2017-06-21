
function getRow(n, m) {
    var arrOfNumbers = [], i;

    try {
        if (typeof n !== 'number' || typeof m !== 'number' || n <= 0 || m <= 0) {
            throw new SyntaxError('Data invalid');
        }

        for (i = 1; i <= m + n ; i++) {
            if (i*i > m ) {
                if (arrOfNumbers.length === n) break;
                arrOfNumbers.push(i);
            }
        }

        return arrOfNumbers.join(',');

    } catch(e) {

        let error = {
            status: 'failed',
            reason: 'Enter valid data(numbers)'
        }

        console.log(`status: ${error.status}, reason: ${error.reason}`);
    }
  
}