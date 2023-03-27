const sum = require('./lib/myMOdule');
const { } = require('chai');


describe('Test Suite', () => {

    it ('Test Input', () => {   

        let arr = ['1', '2']

        if(sum (arr)){

            console.assert(['1', '2'], arr);

        }

    }

    );

    
    it ('Test Array', () => {

        let arr = ['1', '2']

        if(sum (arr)){

            console.assert(Array.isArray(arr));

        }

    }

    );

    it ('Test ArrayOfInt', () => {

        let arr = ['1', '2']

        if(sum (arr)){

            console.assert(Number.isInteger(arr[0]));
            console.assert(Number.isInteger(arr[1]));

        }

    }

    );

    it ('Test Sum', () => {

        let arr = ['1', '2']

        let result = sum(arr);
    
        console.assert(result, 3);

    }

    );

    it ('Test Sum2', () => {

        let result = sum(['1', '2']);

        if(result !==  3){
            throw new Error ('didnt work correct');
        }
    

    }

    );
    



})








