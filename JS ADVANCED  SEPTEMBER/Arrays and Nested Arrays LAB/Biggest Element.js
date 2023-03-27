function biggestNum(arrNested){

    let biggest = Number.MIN_SAFE_INTEGER;

    arrNested.forEach(row => row.forEach(col => biggest = Math.max(biggest, col)));

  // for (let row = 0; row < arrNested.length; row++) {


  //   let curRow = arrNested[row];

  //       for (let col = 0; col < curRow.length; col++) {
           
  //           if (arrNested[row][col] > biggest){
  //               biggest = arrNested[row] [col];
  //           }
  //       }


  // }

  return biggest
}
 console.log(biggestNum([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ));