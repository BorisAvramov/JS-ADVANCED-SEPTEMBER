const {isOddOrEven} = require('./02. Even Or Odd');
const {assert, expect} = require ('chai');

describe('Tests Even or Odd', () => {

    it ('Negative is Not string', () => {

        expect (isOddOrEven([1, '3'])).equal(undefined);
        expect (isOddOrEven()).equal(undefined);



    });

    it ('PositiveEven', () => {


        expect(isOddOrEven('ab')).equal('even');



    });
    it ('PositiveOdd', () => {


        expect(isOddOrEven('abc')).equal('odd');



    });

});