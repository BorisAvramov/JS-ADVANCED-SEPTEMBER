function rotateArr(arrStings, numRotate){

for (let index = 1; index <= numRotate; index++) {

    let lastNUm = arrStings.pop();

    arrStings.unshift(lastNUm);

 

}

    console.log( arrStings.join(' '));


}
rotateArr(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15

);