function diagonalAttacked(matrixString){

    let matrixNum = [];
 

    let firstDiagonal = 0;
    let secondDiagonal = 0;

    // let colCOuntFirstDiagonal = 0
    // let colCountSecondDiagonal = matrixString.length - 1;

    while (matrixString.length > 0){

        matrixNum.push(matrixString.shift().split(' ').map(Number));

    }



    // for (let row = 0; row < matrixString.length; row++) {
        
    //     let curRow = matrixString[row].split(' ').map(str => Number(str));
    //     matrixNum.push(curRow);
       
    //         firstDiagonal += curRow[colCOuntFirstDiagonal];
    //     colCOuntFirstDiagonal++;

    //     secondDiagonal += curRow[colCountSecondDiagonal];
    //     colCountSecondDiagonal--;


    // }

    for (let row = 0; row < matrixNum.length; row++) {

        firstDiagonal += matrixNum[row][row];

        secondDiagonal += matrixNum[row][matrixNum.length - 1 - row];
    }


    if(firstDiagonal === secondDiagonal){
        // colCOuntFirstDiagonal = 0;
        // let colCountSecondDiagonal = matrixString.length - 1;

        for (let row = 0; row < matrixNum.length; row++) {
            
            for (let col = 0; col < matrixNum[row].length; col++) {
                
                // if(colCOuntFirstDiagonal !== col && colCountSecondDiagonal !== col){

                //     matrixNum[row][col] = firstDiagonal
                // }
                if(col !== row && col != matrixNum.length - 1 - row){

                    matrixNum[row][col] = firstDiagonal

                }
                
            }
            // colCOuntFirstDiagonal++;
            //     colCountSecondDiagonal--;
        }

    }
    

        matrixNum.forEach(line => console.log(line.join(' ')))

    



}

diagonalAttacked(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']


);