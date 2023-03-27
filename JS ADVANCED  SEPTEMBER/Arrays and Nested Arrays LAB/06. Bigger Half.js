function biggerHalf(numArr){

    numArr.sort((a, b) => a-b);

    let startIndex = 0;
    let newArr = [];
    // if(numArr.length % 2 == 0){
    //     startIndex = numArr.length / 2;
    //      newArr = numArr.splice(startIndex,startIndex);

    // }
    // else{

    //     startIndex = Math.floor(numArr.length / 2); 
    //     newArr = numArr.splice(startIndex,startIndex + 1);

    // }

    startIndex = Math.floor(numArr.length / 2);
    // newArr = numArr.splice(startIndex);
    newArr = numArr.slice(startIndex);

    return newArr
 
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));