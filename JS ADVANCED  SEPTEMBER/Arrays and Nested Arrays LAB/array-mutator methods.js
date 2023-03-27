
// pop -> push ; shift -> unshift

let cars = ['Honda', 'Opel', 'BMW', 'Audi'];
console.log(cars);
cars.pop();

console.log(cars);

cars.push('Reanult');
console.log(cars);

cars.push(...['Pegeut', 'Hyundai']);

console.log(cars);

cars.shift();

cars.unshift('Nissan');

console.log(cars);

// splice

cars.splice(1, 1, 'Seat');
console.log(cars);

// Fill

cars.fill('Trabant', 2, 3);
console.log(cars);

cars.reverse();
console.log(cars);

// sort method with Function - > compare model a , b

let nums = [3, 1, 5, 2, 4, 6];

// ascending 
// nums.sort(function (a, b){
//     if (a < b){
//         return -1;
//     }
//     if(a > b){
//         return 1;
//     }
//     if(a == b){
//         return 0;
//     }

// });

// ascendinf
nums.sort((a, b) => a - b);

console.log(nums);
// descending

nums.sort((a, b) => b - a);
console.log(nums);


// other way wih arrow function

nums.sort((a ,b) => {

    return a - b ;


});

console.log(nums);
