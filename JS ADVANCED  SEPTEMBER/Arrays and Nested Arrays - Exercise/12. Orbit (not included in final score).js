function orbit (arrNums){

    let [col, row,...coordinates] = arrNums;

    let [rowStar, colStar] = coordinates;

    
    let matrix = [...Array(row)].map(el => Array(col).fill(-1));

    matrix[rowStar][colStar] = 1;

    let isNotFullMatrix =  (matrix) => matrix.some((arr) => arr.some(value => value === -1)) 

    let curNUmToFill = 2;

    let curRow = rowStar;
    let curCol = colStar;

    let curChangeIndex = 1;

    while(isNotFullMatrix(matrix)){

       if(IsInRange(matrix, curRow - curChangeIndex, curCol)){
        matrix[curRow - curChangeIndex][curCol] = curNUmToFill;

       }
       if(IsInRange(matrix, curRow - curChangeIndex, curCol - 1)){
        matrix[curRow - curChangeIndex][curCol - 1] = curNUmToFill;

       }
       if(IsInRange(matrix, curRow - curChangeIndex, curCol + 1)){
        matrix[curRow - curChangeIndex][curCol + 1] = curNUmToFill;

       }
       if(IsInRange(matrix, curRow, curCol - curChangeIndex)){
        matrix[curRow][curCol - curChangeIndex] = curNUmToFill;

       }
       if(IsInRange(matrix, curRow, curCol + curChangeIndex)){
        matrix[curRow][curCol + curChangeIndex] = curNUmToFill;

       }

       if(IsInRange(matrix, curRow + curChangeIndex, curCol)){
        matrix[curRow + curChangeIndex][curCol] = curNUmToFill;

       }
       if(IsInRange(matrix, curRow + curChangeIndex, curCol  - 1)){
        matrix[curRow + curChangeIndex][curCol - 1] = curNUmToFill;

       }
       if(IsInRange(matrix, curRow + curChangeIndex, curCol  + 1)){
        matrix[curRow + curChangeIndex][curCol + 1] = curNUmToFill;

       }
        

                curChangeIndex++;
        curNUmToFill++;
        
    }

    function IsInRange(matrix, row, col){

        return (row >= 0 && row < matrix.length - 1) && (col >= 0 && col < matrix[row].length - 1)

    }

    // console.log(matrix);

        matrix.forEach(el => console.log(el.join(' ')));
}
orbit([4, 4, 0, 0]);