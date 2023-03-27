// Dot notation

let cat = {};

cat.name = 'Nafcho';

console.log(cat.name);
console.log(cat['name']);

// Bracket notation => when there is special symbol in identifier of the prop

let person = {};

person['age'] = 35;

console.log(person.age);
console.log(person['age']);

let personName = 'firstName';

person[personName] = 'Pesho';

console.log(person[personName]);

console.log(person['firstName']);

console.log(person.firstName);