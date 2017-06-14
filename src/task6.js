

"use strict"

function getRow(n, m) {

  try {

    if ( isNaN(n) || isNaN(m) || n <= 0 || m <= 0) {
      throw new Error('Data invalid');
       }

    var arr = [];

    for (var i = 1; ; i++) {

      if (i*i > m ) {

        if ( arr.length == n) break;
        arr.push(i)
      }
    }

   return arr.join(',');

  } catch(e) {
    
    var error = {
            status: 'failed',
            reason: 'Enter valid data(numbers)'
          }

    alert ('status: ' + error.status + ', reason: ' + error.reason);
  }
 
  
}


























