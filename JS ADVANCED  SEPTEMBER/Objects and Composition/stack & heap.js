let person = {

    name: 'Boris',
    age: 35,
    city: 'Varna',
    isMale: true,

}


let otherPerson = person; // copy refference to HEAP / otherPerson and person are the same refference / 

otherPerson.name = 'Avramov'

console.log(otherPerson.name);

console.log(person.name);