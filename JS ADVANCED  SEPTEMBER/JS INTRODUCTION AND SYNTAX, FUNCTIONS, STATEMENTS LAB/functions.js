//Function declaration
function printFullname(){
    console.log('Peter Ivanov');
    console.log('Peter Ivanov');
    console.log('Peter Ivanov');
}
//Function invokation

function PersonInfo(firstName, lastNamq, town, age){
    console.log(firstName + ' ' +lastNamq+ ' ' + town + ' ' +age);
}

PersonInfo('Boris', 'Avramov', 'Varna', 35);

// Function expression

let countDown = function(number){
    for(let i = number; i > 0; i--){
        console.log(i);
    }
}

countDown(10);

// Function expression with return value

console.log('Write your Birth Year');


let myAge = function(year){
    if (year < 1987 || year > 2000){
        return 'Wrong year';
    }
    let curAge = 36;
    for(let i = 1987; i <= 2000; i++){
        curAge--;
        if(i == year){
            break;
        }
    }

    return curAge;
}

let year = 1987;

console.log(myAge(year));

//Arrow functon

let seasonBirth = (month) => {
    if(month == 12 || (month >= 1 && month <= 2)){
        console.log( 'Winter');
    }
    else if(month >= 3 && month <=5 ){
        console.log('Spring');
    }
    else if(month >= 6 && month <= 8){
        console.log( 'Summer');
    }
    else{
        console.log( 'Autumn');
    }

}

seasonBirth(10);

//return function

let sumArrow = (a, b) => a + b;

console.log(sum(5, 2));

function sum (a, b){
    return a +b;
}

let result = sum(5, 5);

console.log(result);

// Methods => standart library of Functions which a Object possess

let dogName = 'Sharo';

console.log(dogName.toUpperCase());

