function equalNambers(matrix){

    let count = 0;

    for (let row = 0; row < matrix.length; row++) {

        let rowArr = matrix[row];

        for (let col = 0; col < rowArr.length; col++) {

            if  (row + 1 < matrix.length ){

                if(matrix[row][col] == matrix [row + 1][col]  ){

                    count++;
    
                }

            }
            if(col + 1 < rowArr.length){
                if(matrix[row][col] ==  matrix [row][col + 1]  ){

                    count++;
    
                }
            }

              

            

          


        }

    }

   return count;


}
 console.log(equalNambers([ 
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
]));