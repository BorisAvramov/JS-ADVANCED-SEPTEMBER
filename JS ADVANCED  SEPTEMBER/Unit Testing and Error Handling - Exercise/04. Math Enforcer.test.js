const {mathEnforcer} = require ('./04. Math Enforcer');
const {assert, expect} = require('chai');

describe ('TestsMathEnforcer', () => {

    it ('TestProperties', () => {

        expect(mathEnforcer).haveOwnPropertyDescriptor('addFive');
        expect(mathEnforcer).haveOwnPropertyDescriptor('subtractTen');
        expect(mathEnforcer).haveOwnPropertyDescriptor('sum');



    })



    describe ('TestsAddFive', () => {

        it ('NegativeNotNUmber', () => {

            expect (mathEnforcer.addFive('2')).equal(undefined);
            expect (mathEnforcer.addFive()).equal (undefined);

        });

        it ('PositiveAddNUm', () => {

            expect (mathEnforcer.addFive(2)).equal (7);
            expect (mathEnforcer.addFive(-5)).equal (0);

            assert.closeTo(mathEnforcer.addFive(1.5), 6.5, 0.01);
            expect (mathEnforcer.addFive(1.5)).equal (6.5);

        });





    });


    describe ('TestsSubtractTen', () => {

        it ('NegativeNotNUmber', () => {

            expect (mathEnforcer.subtractTen('2')).equal (undefined);
            expect (mathEnforcer.subtractTen()).equal (undefined);

        });

        it ('PositiveAddNUm', () => {

            expect (mathEnforcer.subtractTen(2)).equal (-8);
            expect (mathEnforcer.subtractTen(-5)).equal (-15);
            assert.closeTo(mathEnforcer.subtractTen(20.5), 10.5, 0.01)
            expect (mathEnforcer.subtractTen(20.5)).equal (10.5);

        });





    });

    
    describe ('TestsSum', () => {

        it ('NegativeNotNUmber', () => {

            expect (mathEnforcer.sum(2, 'aasf')).equal (undefined);
            expect (mathEnforcer.sum('2', 2)).equal (undefined);
            expect (mathEnforcer.subtractTen()).equal (undefined);

        });

        it ('PositiveAddNUm', () => {

            expect (mathEnforcer.sum(2, 3)).equal (5);
            expect (mathEnforcer.sum(-2, 3)).equal (1);
            expect (mathEnforcer.sum(2, -3)).equal (-1);
            expect (mathEnforcer.sum(-2, -3)).equal (-5);

            assert.closeTo(mathEnforcer.sum(2.5, 3), 5.5, 0.01);
            assert.closeTo(mathEnforcer.sum(3, 2.5), 5.5, 0.01);

        });





    });




});