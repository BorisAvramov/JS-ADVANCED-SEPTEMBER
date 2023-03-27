function SameNumbers(a){

    let num = Number(a);

     let stringNUm = num.toString();

    // let stringNUm = String(num);
    let isSame = true; 
    let sum = 0;

    while ( num > 0) {
        let curDigit = num % 10;
        sum+=curDigit;

        num = (num / 10) - (curDigit / 10);

    }


    for (let index = 0; index < stringNUm.length - 1; index++) {
        
        if(stringNUm[index] !== stringNUm[index + 1]){
            isSame = false;
            break;
        }

    }

    if(isSame){
        console.log('true');
    } else{
        console.log('false');

    }

    console.log(sum);

}

SameNumbers(2222222);