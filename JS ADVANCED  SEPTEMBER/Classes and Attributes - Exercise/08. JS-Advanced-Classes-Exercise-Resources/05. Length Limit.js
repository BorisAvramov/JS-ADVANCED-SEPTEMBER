class Stringer {

    constructor (string, length ) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase( length){

        this.innerLength+=length;

    }
    decrease(length){
       
        this.innerLength = this.innerLength - length < 0 ? 0 : this.innerLength -= length;

    }

    toString () {

        
         if(this.innerString.length > this.innerLength){

            if(this.innerLength == 0){

                return '...';
            }  
            let diff = this.innerString.length - this.innerLength;

            return this.innerString.substring(0, diff) + '...';


        }
        else{
            return this.innerString;
        }
        


    }






}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
