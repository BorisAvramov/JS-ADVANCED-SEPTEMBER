let car = {
    model: 'BMW',
    year: 2010,
    facelift: true,
    horn:  function (){ 

        console.log(`${this.model}: beep beep!`);
    },
   
    
}

car.horn(); // 'this.' is context of Object, refer to object CAR

let singleHorn = car.horn; // Copy refference of function horn to singleHorn; they have same refference, they are equal; !!!! Without Invoke Method  with'()'

singleHorn(); // result : 'undefined: beep beep!' / car isnt present in context this indicate 'undefined'

let otherCar = {

    model: 'Audi',
    color: 'Yellow'
}

otherCar.horn = singleHorn; // || otherCar.horn = car.horn; // with do notation we create method tо oobject /function/ and assign its value to car.horn Method by singleHorn, they have same refference in the heap;

otherCar.horn(); // succesing method / function execution in Context;


