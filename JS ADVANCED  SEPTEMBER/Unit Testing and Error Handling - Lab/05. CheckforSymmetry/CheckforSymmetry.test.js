const {isSymmetric} = require('./CheckforSymmetry');
const {assert, expect} = require ('chai');


describe ('Symmetry Tests', () => {

    it ('Positive Simmetry Numbers', () => {

        let result = isSymmetric([1, 2, 2, 1])

        console.assert(true, result);
        


    });

    it('Negative Simmetry', () => {

        expect(isSymmetric([1, 2, 3, 5])).equal(false);



    });


    it ('Negative No Array', () => {

        console.assert(false, isSymmetric(5));

    });

    it('Positive Simmetry Strings', () => {

        expect(isSymmetric(['1', '2', '2', '1'])).equal(true);



    });

    it('Positive Simmetry Strings', () => {

        expect(isSymmetric(['1', '2', 2, 1])).equal(false);



    });


});


