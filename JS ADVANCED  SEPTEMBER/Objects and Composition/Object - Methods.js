    function horn(){

        console.log('beep beep!');
    }

let car = {
    model: 'BMW',
    year: 2010,
    facelift: true,
    horn:  function (){ // METHOD WITH FUNCTIN EXPRESSION;

        console.log('beep beep!');
    },
    horn1: () => { // METHOD WITH ARROW FUNCTON;

        console.log('beep beep1!');
    },
    horn2(){ // OBJECT METHOD NOTATION; !!!!!!!!!!!!!!!!!!!!!!!!
        console.log('beep beep2!');


    }
  
}

car.horn();
car.horn1();
car.horn2();

// OBJECT AS FINCTIONS LIBRARY;

function division(a, b) {
    return a / b;
}

let calc = {

    division, // like devision: division,
    add: function(a, b) {

        return a + b;
    },

    subtract: (a, b) => {

        return a - b;
    },

    multpiply(a, b){
        return a * b;
    },

}

console.log(calc.division(6,  2));
console.log(calc.add(2, 2));
console.log(calc.subtract(4, 3));
console.log(calc.multpiply(5, 2));