function ticTAcToe(arrMoves){

    let matrix = [
    [false, false, false],
    [false, false, false],
    [false, false, false]];

    let freeSpaces = 9;

    let firstTurn = true;
    let isThereWinner = false;
    let theWinner;

    for (let index = 0; index < arrMoves.length; index++) {
        
        
        let curMOve = arrMoves[index];
        let row = Number( curMOve[0]);
        let col = Number (curMOve[2]);
        
        if(matrix[row][col] === 'X' || matrix[row][col] === 'O'){
            
            console.log("This place is already taken. Please choose another!");
            
            continue;
        }


        if(firstTurn === true){

            matrix[row][col] = 'X';
            freeSpaces--;
            firstTurn = false;
        }
        else{

            matrix[row][col] = 'O';
            freeSpaces--;
            firstTurn = true;
        }

        isThereWinner = win(matrix);

        if(isThereWinner){
            break;
        }

        if(freeSpaces === 0){
            
            break;
        }

        function win(matrix) {

            let firstRow = matrix[0];
            for (const row of matrix) {
                
                if(row[0] === 'X' && row[1] === 'X' && row[2] === 'X'){
                    theWinner = 'X';
                    return true;
                }
                if(row[0] === row[1] === row[2] === 'O'){
                    theWinner = 'O';
                    return true;
                }

               

            }

            for (let col = 0; col < firstRow.length; col++) {
                
                
                    if(matrix[0][col] === 'X' && matrix[1][col] === 'X' && matrix[2][col] === 'X'){

                        theWinner = 'X';
                        return true;
                    }
                    if(matrix[0][col] === 'O' && matrix[1][col] === 'O' && matrix[2][col] === 'O'){

                        theWinner = 'O';
                        return true;
                    }
                

            }

           if(matrix[0][0] === 'X' && matrix[1][1] === 'X' && matrix[2][2] === 'X') {

                theWinner = 'X';
                return true;
           }
           if(matrix[0][0] === 'O' && matrix[1][1] === 'O' && matrix[2][2] === 'O') {

            theWinner = 'O';
            return true;
            }

            if(matrix[0][matrix.length - 1] === 'X' && matrix[1][matrix.length - 2] === 'X' && matrix[2][matrix.length - 2] === 'X') {

                theWinner = 'X';
                return true;
           }
           if(matrix[0][matrix.length - 1] === 'X' && matrix[1][matrix.length - 2] === 'X' && matrix[2][matrix.length - 2] === 'X') {

            theWinner = 'O';
            return true;
       }

        };

        
    }
    
    if(isThereWinner){
        console.log(`Player ${theWinner} wins!`);

    }
    else{
        console.log("The game ended! Nobody wins :(");
    }

    for (const row of matrix) {

        console.log(row.join('\t'));
    }


}

ticTAcToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]


);