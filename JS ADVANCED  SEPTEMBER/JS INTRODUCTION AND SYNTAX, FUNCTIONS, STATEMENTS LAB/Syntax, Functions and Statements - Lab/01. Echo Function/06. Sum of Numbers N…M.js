function SumNumbers(stringNum1, stringNUm2){

    let num1 = Number( stringNum1);
    let num2 = Number( stringNUm2);

        let sum = 0;
    for (let index = num1; index <= num2; index++) {
        
        sum+=index;
        
    }
    console.log(sum);
}

// SumNumbers('1', '5');