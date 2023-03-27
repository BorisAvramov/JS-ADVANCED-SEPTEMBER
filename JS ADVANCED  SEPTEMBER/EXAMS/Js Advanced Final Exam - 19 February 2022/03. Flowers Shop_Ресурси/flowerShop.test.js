const {flowerShop} = require ('./flowerShop');
const {assert, epect} = require('chai');

describe ('AllTEsts', ()=> {


    describe ('calcPriceOfFlowersTests', ()=> {


        it ('TestThrowExc', () => {


            assert.throws(() => flowerShop.calcPriceOfFlowers(2, 3, 5), Error, 'Invalid input!')
            assert.throws(() => flowerShop.calcPriceOfFlowers('liliq', '3', 5), Error, 'Invalid input!')
            assert.throws(() => flowerShop.calcPriceOfFlowers('liliq', 3, '5'), Error, 'Invalid input!')
            assert.throws(() => flowerShop.calcPriceOfFlowers('liliq', '3', '5'), Error, 'Invalid input!')
            assert.throws(() => flowerShop.calcPriceOfFlowers(3, '3', '5'), Error, 'Invalid input!')


        })

        it ('PositiveTest', () => {


           let result = flowerShop.calcPriceOfFlowers('liliq', 2, 5);

            assert.equal(`You need $10.00 to buy liliq!`, result);

        })



    });

    describe ('checkFlowersAvailableTests', ()=> {


        it ('TestNegative', () => {

            let result = flowerShop.checkFlowersAvailable('orhideq', ["Rose", "Lily", "Orchid"]);

            	assert.equal(`The orhideq are sold! You need to purchase more!`, result);


        })

        it ('PositiveTest', () => {

            let result = flowerShop.checkFlowersAvailable('Orchid', ["Rose", "Lily", "Orchid"]);

            assert.equal( `The Orchid are available!`, result);

        })



    });

    describe ('sellFlowersTests', ()=> {


        it ('TestNegative', () => {

            assert.throws(() => flowerShop.sellFlowers('cvete', 2), Error, 'Invalid input!')
            assert.throws(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], '2'), Error, 'Invalid input!')
            assert.throws(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1), Error, 'Invalid input!')
            assert.throws(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 4), Error, 'Invalid input!')



        })

        it ('PositiveTest', () => {

            let result = flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1);

            assert.equal('Rose / Orchid', result);

        })



    });





});