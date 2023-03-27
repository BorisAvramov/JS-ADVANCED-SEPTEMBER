function demo (arr){

    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    let furstCo = Math.sqrt( Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2) );
    let furstValid = Number.isInteger(furstCo) ? 'valid' : 'invalid';

    console.log(`{${x1}, ${y1}} to {0, 0} is ${furstValid}`);

    let secondCom = Math.sqrt( Math.pow(0 - x2, 2) + Math.pow(0 - y2, 2) );
    let secondValid = Number.isInteger(secondCom) ? 'valid' : 'invalid';

    console.log(`{${x2}, ${y2}} to {0, 0} is ${secondValid}`);


    let thirthComp = Math.sqrt( Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) );
    let tirthValid = Number.isInteger(thirthComp) ? 'valid' : 'invalid';

    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${tirthValid}`);



}
demo(new Array(2, 1, 1, 1));