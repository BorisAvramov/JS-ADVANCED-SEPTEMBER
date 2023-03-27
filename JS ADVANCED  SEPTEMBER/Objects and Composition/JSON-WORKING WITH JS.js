let car = {
    model: 'BMW',
    year: 2010,
    facelift: true,
    
   
    owner: {
        name: 'Ivan',
        age: 30,
        hobbies: [
            'sport',
            'cinema',
            'music',

        ]

    }
    
}

let jsonCar = JSON.stringify(car); // SERIALIZING -> CONVERT TO json format

console.log(jsonCar); // this is string format /JSON/


let parsedCar = JSON.parse(jsonCar); // DESERIALIZING => PARSE JSON FORMAT TO OBJECT CAR;

console.log(parsedCar); // this is object CAr
