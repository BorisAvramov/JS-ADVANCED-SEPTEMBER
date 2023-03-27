function diagonalSums(matrix){

    let countCol = 0;
    
    let cauntCol = -2;

    let firstSum = 0;
    let secondSum = 0

    let indexFirst= 0;
    let indexSecond = matrix[0].length -1;


    matrix.forEach( (Array => {

        firstSum += Array[indexFirst++];
        secondSum += Array[indexSecond--];


    }) );

    // for (const row of matrix) {
        
    //     firstSum += row[indexFirst];
    //     indexFirst++;

        

    //     secondSum += row [indexSecond];
    //     indexSecond--;

    // }

   
    console.log(firstSum + ' ' + secondSum);

}
diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   
   );