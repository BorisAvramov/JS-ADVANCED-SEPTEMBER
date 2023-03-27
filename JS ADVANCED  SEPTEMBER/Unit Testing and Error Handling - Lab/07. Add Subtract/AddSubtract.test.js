const {createCalculator} = require ('./AddSubtract');
const {assert, expect} = require ('chai');

describe ('Tests Calculator', () => {

    it ('Test Return Object and Object Includes AddSubtractGet', () => {

        let object = createCalculator();

        expect(object).instanceOf(Object);

        let keys = Object.keys(object);

        expect(keys).includes('add', 'subtract', 'get');

        expect(object).haveOwnPropertyDescriptor('add', 'subtract', 'get');

    });

    it ('internal sum that can’t be modified', () => {

        let objectCalculator = createCalculator();

        let value = objectCalculator.add(5);

        expect(objectCalculator.get()).equal(5);

         value = objectCalculator.subtract('2');

        expect(objectCalculator.get()).equal(3);

         value = objectCalculator.get();

        expect(value).to.be.a('number');

        value = objectCalculator.add('1');

        expect (objectCalculator.get()).equal(4);

    });



});