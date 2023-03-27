function magicMatrix(matrix){


    let isMagical = true;

    let SumFrstRow = matrix[0].reduce((acc, cur) =>{

        return acc+= cur


    }, 0);

    for (const row of matrix) {
        
        let curSumRow = row.reduce((acc, cur) =>{

            return acc+= cur
    
    
        }, 0);

        if(curSumRow != SumFrstRow){
            isMagical = false;
            break;
        }

    }

    for (let row = 0; row < matrix.length; row++) {

        let curSumCol = 0;

        for (let col = 0; col < matrix.length; col++) {
            
            curSumCol += matrix[row][col];

        }

        if(curSumCol != SumFrstRow){
            isMagical = false;
            break;

        }
        
    }


    if(isMagical){

        return 'true';

    }
    else{
        return 'false';
    }



}
console.log(magicMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   
   
   ));