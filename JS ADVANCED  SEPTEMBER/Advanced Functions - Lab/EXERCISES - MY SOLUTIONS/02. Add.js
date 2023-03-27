function solution(num1){

    function add(a, b){

        return a+b;

    }

    return add.bind(this, num1)




    // let sum = num1

    // return function (num2){

    //     sum += num2;
    //     sum1 = sum;
    //     sum = num1;
    //     return sum1;

    // }

  

}






let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
