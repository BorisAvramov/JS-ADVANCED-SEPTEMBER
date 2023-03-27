function solve(arr, startI, endI){


    let sum = 0;

    if(!Array.isArray(arr)){

        sum =  NaN;
    }
    else if(arr.length == 0){

        sum = 0;
    }



   else  if(Array.isArray(arr)  && arr.some(e => isNaN(Number(e)))){

        sum = NaN;
    }

   else {
    if(startI < 0){
        startI = 0;
    }
    if(endI > arr.length - 1){
        endI = arr.length - 1;
    }

    for (let index = startI; index <= endI; index++) {
        sum += Number( arr[index]);
        
    }

   }

    return sum;



}





console.log( solve([10, 20, 30, 40, 50, 60], 3, 300));