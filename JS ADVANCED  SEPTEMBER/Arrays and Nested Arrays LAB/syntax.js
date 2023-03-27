let names = ['Ivan', 'Pesho', 'Gosho'];

console.log(names);

names.length = 5;

console.log(names);
console.log(names[1]);
console.log(names[3]);
console.log(names[10]);
console.log(names[-1]);

names[5] = 'Dimi';
names[-1] = 'Hacker'
console.log(names.length);
for (const name of names) {
    console.log(name);
}

names["hidden"] = "Ani"

console.log(names["hidden"]);

//Array Destructuring Assignement Syntax and  REST operator

let [firstName, secondname, thirdName, ... others] = names;

console.log(firstName);
console.log(secondname);
console.log(others);