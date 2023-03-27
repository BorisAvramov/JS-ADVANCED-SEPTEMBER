function processOddPosition(arrNums){

    return arrNums.filter( (n, index) => index %  2 != 0 ).map( n => n * 2 ).reverse().join(' ');


}
console.log(processOddPosition([3, 0, 10, 4, 7, 3]));