
"use strict"

function drawBoard(len, wid, sym) {

  try {
    if (isNaN(len) || isNaN(wid) || sym === undefined) {
      throw new SyntaxError('Data invalid');
    }

    var str = '';

      for ( var i = 1; i <= wid; i++) {

        for ( var j = 1; j < len*2; j++ ) {
          str += ( i % 2 == j % 2 ) ? sym : ' ';
        }
      str += '\n'
        }

   return str;

    } catch(e) {

    var error = {
            status: 'failed',
            reason: 'Enter valid data(numbers)'
          }

    alert ('status: ' + error.status + ', reason: ' + error.reason);

  }

}



























