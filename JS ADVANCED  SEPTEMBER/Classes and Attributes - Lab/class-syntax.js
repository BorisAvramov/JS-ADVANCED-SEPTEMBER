/// first Example

class Cat {


    //private prop / field 

    #kilograms;

// default value
    isHungry = true;

// static prop
    static legNUmber = 4;


    constructor (name, kilograms) {
        this.name = name;
        this.#kilograms = kilograms;
    }

    get weight() { return this.#kilograms};
    set weight (value){

        if (value < 0){
            throw Error (`${this.name} cant weight under zero kg`);
        }

        this.#kilograms = value;

        
    }

    eat(food) {

        console.log(`${this.name} is eating ${food}`);
        this.isHungry = false;
        this.#kilograms ++;
    }

    sound(){
        console.log(`${this.name}: Meaow`);
    }

    static vetCheck (cat){

        if (cat.isHungry) {
            console.log(`${cat.name} should be fed!`);
        }
        else{
            console.log(`${cat.name} is fed`);
        }

    }
}

let peshoSCat = new  Cat('kiki');
console.log(peshoSCat);

console.log(peshoSCat.name);

peshoSCat.eat('Whiskas')

//second example

let catNames = ['Susi', 'Niki', 'Pisi', 'Kiki'];

let arrayOfCatsObjects = catNames.map(n => new Cat (n));

console.log(arrayOfCatsObjects);

let susiCat = arrayOfCatsObjects.find(c => c.name == 'Susi');
console.log(susiCat);

// polymorphism - all varous of cats is meowing; this in context - this. name arrow to certain cat; this arrow to the certain instance of class CAt
arrayOfCatsObjects.forEach(c => c.sound()) ;

console.log(susiCat.isHungry);
susiCat.eat('granuli');
console.log(susiCat.isHungry);

//instanceof

console.log(susiCat instanceof Cat);
console.log(susiCat instanceof Object);
console.log(susiCat instanceof String);
console.log(susiCat instanceof Number);

// static prop

console.log(Cat.legNUmber);

//static method like Math.Round

Cat.vetCheck(susiCat);

//private fileds

let nqkvaKotka = new Cat ('nqkva', 10);
console.log(nqkvaKotka);
console.log(nqkvaKotka.weight);
nqkvaKotka.eat('neshto');
console.log(nqkvaKotka.weight);

con

