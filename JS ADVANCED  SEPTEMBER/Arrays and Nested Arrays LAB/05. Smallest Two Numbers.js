function twoSmallestNums(arrNUm){

    arrNUm.sort((a, b) => a - b);

    console.log(`${arrNUm[0]} ${arrNUm[1]}`);




//     let firstSmallest = Number.MAX_SAFE_INTEGER;
//     let secondSmallest = Number.MAX_SAFE_INTEGER;

//     for (let index = 0; index < arrNUm.length; index++) {
        
//         if(arrNUm[index] < firstSmallest){
//             firstSmallest = arrNUm[index];
//         }
       


//     }

//    arrNUm = arrNUm.filter(function(value, index, arr){

//     return value != firstSmallest;

//    });


//     for (let index = 0; index < arrNUm.length; index++) {
//         if  (arrNUm[index] != firstSmallest && arrNUm[index] < secondSmallest){
//             secondSmallest = arrNUm[index];
//         }
//     }

//     console.log(firstSmallest + ' ' + secondSmallest);

}

twoSmallestNums([3, 0, 10, 4, 7, 3]);