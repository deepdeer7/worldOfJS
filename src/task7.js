
"use strict";

var contextTwo = {
  length: 5

}



function countFib(context) {

  try {

    var a = 1;
    var b = 1;
    var c;
    var arr = [];

    if ( context.min  &&  context.max  ) {

        if ( isNaN(context.min) || isNaN(context.max) || context.max < context.min || 
          context.max <= 0 || context.min <= 0  ) {
          throw new SyntaxError('Data invalid');
        }

    
        if (context.min == 1) {
        arr.push(a);
        arr.push(b);
        }
        
      for (var i = 3; ; i++) {

         c = a + b;
         a = b;
         b = c;

         if ( c > context.max) break;

         if (c >= context.min) {
         arr.push(c)
         }
      }

  return arr;
   
  } else if (  context.length || context.length == 0  ) {

      if ( isNaN(context.length) || context.length <= 0 ) {
        throw new SyntaxError('Data invalid');
      }

        arr.push(a);

      if ( context.length == 1 ) return arr;

      arr.push(b);

      for ( i = 3; ; i++) {
        c = a + b;
        a = b;
        b = c;

        if ( arr.length  == context.length) {
          break;
        } 
      
       arr.push(c);

      }

      return arr;

  }


  } catch(e) {

      var error = {
            status: 'failed',
            reason: 'Enter valid data(numbers)'
          }

    return  'status: ' + error.status + ', reason: ' + error.reason;

  }

 
}



