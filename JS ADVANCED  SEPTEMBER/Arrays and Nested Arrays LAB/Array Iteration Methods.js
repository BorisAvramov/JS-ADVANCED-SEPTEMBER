//foreach, 

let names = ['Pesho', 'Ivan', 'Petkan', 'Ruslan', 'Nasran'];


names.forEach(element => {

    console.log(element);
    
});

console.log('\n');

for (const name of names) {
    console.log(name);
    
}

// Some - > Any in C#

let isIvanPesent =  names.some(e => e == 'Ivan');

console.log(isIvanPesent);

let isNameBeginWithR = names.some(n => n.endsWith('n'));

console.log(isNameBeginWithR);
 
// Find -> FirstOrDefault in C#;

let first = names.find( x => x.length == 6);

console.log(first);
let first2 = names.find( x => x.length == 2);
console.log(first2);

// Filter - > Where in C#

let namesSixLetters = names.filter( n => n.length == 6);


console.log(namesSixLetters);

let namesBeginREndsN = names.filter(n => {

    if (n[0] == 'R' && n.endsWith('n')){

        return n;

    }

});

console.log(namesBeginREndsN);

// Map - > Select in C#

letNamezWithZAtTheEnd = names.map(n => n +'Z');
console.log(letNamezWithZAtTheEnd);

// Reduce 

let numbers = [2, 5, 1, 8, 5]

let sum = numbers.reduce((acc, num) => {

   return  acc += num;


}, 0)

console.log(sum);