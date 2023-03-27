let car = {
    model: 'BMW',
    year: 2010,
    facelift: true,
    horn:  function (){ 

        console.log(`${this.model}: beep beep!`);
    },
   
    owner: {
        name: 'Ivan',
        age: 30,
        hobbies: [
            'sport',
            'cinema',
            'music',

        ],

    }
    
}

console.log(car.owner.name);
console.log(car.owner.hobbies.length);
console.log(car.owner.hobbies[2]);

car.engine = {
    numberCylinders: 2,
    make: 'vag',
    model: 'tdi',

}

console.log(car.engine);

// Nested destructuring

let {owner} = car;
console.log(owner);

let{model} = car;
console.log(model);

let{owner: {age}} = car;
console.log(age);

let{owner: {hobbies}} = car;
console.log(hobbies);

let hobbie1 = hobbies[0];
console.log(hobbie1);

let {owner: {hobbies: [hobbieKind]}} = car;
console.log(hobbieKind);

let hobbie2 = car.owner.hobbies[1]; // SIMPLE WAY TO DESTRUCT / FAST AND COMPREHENSIBLE;    
console.log(hobbie2);

//RENAMING IN DESTRUCTURIN

let{owner: person } = car;
console.log(person);

let{engine: {make: makeEngine} } = car;
console.log(makeEngine);

// various approaches / manners  to PRINT NESTED VALUES => all lines print AGE: 30

console.log(car['owner']['age']);
console.log(car.owner['age']);
console.log(car['owner'].age);
console.log(car.owner.age);

