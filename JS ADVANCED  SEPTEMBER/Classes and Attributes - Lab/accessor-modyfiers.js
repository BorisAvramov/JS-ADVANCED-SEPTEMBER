class Circle {



    constructor (radius){

        this. radius = radius;
    }

    get diameter () {
        return this.radius * 2;
    }

    set diameter (value){

        if (value < 0) {
            throw new Error ('Radius cant be below Zero!');
        }
        else {

            this.radius = value / 2;
        }

    }

    get area(){

        return Math.PI * (this.radius ** 2);

    }


}

let circle = new Circle(2);

console.log(circle.area);
console.log(circle.diameter);

circle.diameter = 1.6;
console.log(circle.area);
console.log(circle.diameter);
console.log(circle.radius);

console.log(Object.values(circle));
console.log(circle.diameter);



