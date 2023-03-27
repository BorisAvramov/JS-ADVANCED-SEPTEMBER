const {rgbToHexColor} = require ('./RGBtoHex');
const {assert, expect} = require ('chai');

describe ('Tests rgbToHexColor', () => {

    
    it ('NegativeNOtThreeInt', () => {


        expect(rgbToHexColor (0, 0)).equal(undefined);
        expect(rgbToHexColor (0)).equal(undefined);
        expect(rgbToHexColor ()).equal(undefined);


    });
    

    it ('NegativeNotInt', () => {


        expect(rgbToHexColor (0, '0', 0)).equal(undefined);
        expect(rgbToHexColor ('0', 0, 0)).equal(undefined);
        expect(rgbToHexColor (0, 0,'0')).equal(undefined);

    });


    it ('NegativeRange', () => {

        expect (rgbToHexColor (-1, 0, 0)).equal(undefined);
        expect (rgbToHexColor (0, -1, 0)).equal(undefined);
        expect (rgbToHexColor (0, 0, -1)).equal(undefined);

    });

    it ('PositiveRange', () => {

        expect (rgbToHexColor (256, 0, 0)).equal(undefined);
        expect (rgbToHexColor (0, 256, 0)).equal(undefined);
        expect (rgbToHexColor (0, 0, 256)).equal(undefined);
        

    });
 

    it ('PositiveRed', () => {

        expect(rgbToHexColor(255, 0, 0)).equal('#FF0000');

    });

    it ('PositiveGreen', () => {

        expect(rgbToHexColor(0, 128, 0)).equal('#008000');


    });

    it ('PositiveBlue', () => {

        expect(rgbToHexColor(0, 0, 255)).equal('#0000FF');


    });
    it ('Positive', () => {

        expect(rgbToHexColor(15, 15, 15)).equal('#0F0F0F');


    });



});