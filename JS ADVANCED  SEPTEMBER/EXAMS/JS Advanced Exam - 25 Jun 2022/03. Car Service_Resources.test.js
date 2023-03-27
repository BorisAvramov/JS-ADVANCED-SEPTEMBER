const {carService} = require('./03. Car Service_Resources'); 
const {assert, expect} = require('chai');

describe ('Tests CarService', () => {

    describe ('Tests isItExpensive ', () => {

        it ('Test Return Correct', ()=> {

           expect (carService.isItExpensive("Engine" )).equal ('The issue with the car is more severe and it will cost more money');
           expect (carService.isItExpensive("Transmission" )).equal ('The issue with the car is more severe and it will cost more money');
           expect(carService.isItExpensive()).equal('The overall price will be a bit cheaper');
           expect(carService.isItExpensive('')).equal('The overall price will be a bit cheaper');
           expect(carService.isItExpensive('blabla')).equal('The overall price will be a bit cheaper');
           expect(carService.isItExpensive(123)).equal('The overall price will be a bit cheaper');

        });



    });

    describe ('Tests discount', () => {

        it ('Test Nevalid Input is not Number', ()=> {
            assert.throw(() => carService.discount("test", 100), "Invalid input");
            assert.throw(() => carService.discount(20, "test"), "Invalid input");

        });

        it ('Test Nevalid Discount ', ()=> {
        
            expect (carService.discount(2, 200)).equal("You cannot apply a discount");
         
 
         });
 
         it ('Test valid Discount ', ()=> {
        
            expect (carService.discount(5, 200)).equal(`Discount applied! You saved 30$`);
            expect (carService.discount(8, 200)).equal(`Discount applied! You saved 60$`);
         
 
         });



    });

    describe ('Tests partsToBuy', () => {

        it ('Test Nevalid Input is not Array', ()=> {
            assert.throw(() => carService.partsToBuy("test", []), "Invalid input");
            assert.throw(() => carService.partsToBuy([], "test"), "Invalid input");

        });
        it ('Test PartsCatalog is Zero', ()=> {
           expect(carService.partsToBuy([], ['blowoff valve'])).equal(0);
           expect(carService.partsToBuy([{part: "coil springs" , price: 230}], ['blowoff valve'])).equal(0);

        });
        it ('Test Positive', ()=> {
            expect(carService.partsToBuy([{part: "coil springs" , price: 230}, {part: "blowoff", price: 200}], ['coil springs', 'blowoff'])).equal(430);
 
         });
     



    });








}) 