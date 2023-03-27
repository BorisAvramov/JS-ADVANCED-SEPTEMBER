function calculator() {
    
    let obj = {};

    let firstEl;
    let secondEl;
    let resultEl;

    function init (selector1, selector2, resultSelector){

        firstEl = document.querySelector(selector1);
         secondEl = document.querySelector(selector2);
         resultEl = document.querySelector(resultSelector);



    }

    function add(){
    
        let sum = Number( firstEl.value ) + Number (secondEl.value);
        resultEl.value = sum;

    }
    function subtract (){

        let result = Number(firstEl.value) - Number (secondEl.value);
        resultEl.value = result;

    } 

    obj.init = init;
    obj.add = add;
    obj.subtract = subtract;


    return obj;


}



const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 

