function add(num1){

    let sum = num1;

    function inner (num2){

        sum += num2;
        return inner;
    }
    
    inner.toString = () => {

        return sum;
    }
    
    return inner;

}

add(1)(6)(-3);