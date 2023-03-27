function Agregate(numberArray){

    function Sum(numberArray){
        let sum = 0;
        for (let index = 0; index < numberArray.length; index++) {
            
            sum += numberArray[index];
            
        }

        console.log(sum);
    }

    Sum(numberArray); 

    function Sum2(numberArray){
        let sum = 0;
        for (let index = 0; index < numberArray.length; index++) {
            
            sum += 1 / numberArray[index];
            
        }

        console.log(sum);
    }

    Sum2(numberArray);


    function Sum3(numberArray){
        let sum = '';
        for (let index = 0; index < numberArray.length; index++) {
            
            sum += numberArray[index];
            
        }

        console.log(sum);
    }

    Sum3(numberArray);
}

// Agregate(new Array(1, 2, 3));