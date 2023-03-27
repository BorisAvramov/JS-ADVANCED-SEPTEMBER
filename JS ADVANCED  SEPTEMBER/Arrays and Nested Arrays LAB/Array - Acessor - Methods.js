// join

let names = ['Pesho', 'Ivan', 'Petkan', 'Ruslan', 'Nasran'];

let names1 = names.join(':');

console.log(names);
console.log(names1);

// slice


let sliceNames = names.slice(1, 3);

console.log(sliceNames);

// includes 

let isAvailable = names.includes('Ivan');
console.log(isAvailable);
let isAvailableSecond = names.includes('Ivan', 2);
console.log(isAvailableSecond);

//index

let indexIvan = names.indexOf('Ivan');
console.log(indexIvan);

let indexIvan2 = names.indexOf('Ivan', 2);
console.log(indexIvan2);

