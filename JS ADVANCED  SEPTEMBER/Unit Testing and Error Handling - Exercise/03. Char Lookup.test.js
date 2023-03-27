const {lookupChar} = require ('./03. Char Lookup');
const {assert, expect} = require('chai');

describe ('TestsLookUpChar', () => {

    it ('TestTypeInputNegative', () => {

        expect (lookupChar(2, 3)).equal(undefined);
        expect (lookupChar('gosho', '3')).equal(undefined);
        expect (lookupChar()).equal(undefined);
        expect (lookupChar('gosho', 1.5)).equal(undefined);



    });

    it ('TestOutOfRangeInputNegative', () => {

        expect (lookupChar('gosho', -1)).equal('Incorrect index');
        expect (lookupChar('gosho', 5)).equal('Incorrect index');

    });

    it ('PositiveTest', () => {

        expect (lookupChar('gosho', 1)).equal('o');
        

    });

});