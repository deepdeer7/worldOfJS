'use strict';


function task5 (context) {
    var result,
    max, min;

    try {
        preValidate(context);
        countSimple(context);
        countDifficult(context);
        result = compareFun(countSimple(context), countDifficult(context));
    } catch (err) {
        result = {status: 'failed', reason: err};
    }
    return result;
}

function preValidate (context) {
    var max, min;

    max = Number(context.max);
    min = Number(context.min);

    if (min > max) {
        throw 'min is more than max lol';
    }
}

function countSimple (context) {
    var max, min,
    count,
    arr,
    i;

    max = Number(context.max);
    min = Number(context.min);
    count = 0;

    for (i = min; i <= max; i++) {
        arr = i.toString().split('');

        if (Number(arr[0]) + Number(arr[1]) + Number(arr[2]) === 
            Number(arr[3]) + Number(arr[4]) + Number(arr[5])) {
            count++;
        }
    }

    return count;
}

function countDifficult (context) {
    var max, min,
    even, odd,
    count, num,
    i, j,
    arr;

    max = Number(context.max);
    min = Number(context.min);

    count = 0;
    
    for (i = min; i <= max; i++) {
        even = 0;
        odd = 0;

        arr = i.toString().split('');

        for (j = 0; j < arr.length; j++) {
            num = Number(arr[j]);
            num %2 == 0 ? even += num : odd += num;
        }

        if (even === odd) {
            count++;
        }
    }

    return count;
}

function compareFun(simple, difficult) {
    return (simple > difficult) ? `simple:${simple}` : `difficult:${difficult}`;
}