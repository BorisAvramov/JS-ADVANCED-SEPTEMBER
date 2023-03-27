const {rentCar} = require ('./rentCar');
const {assert, expect} = require ('chai');

describe('AllTests', () => {

    describe('searchCarTests', () => {

        it('NeagativeInput', () => {

            assert.throws(() => rentCar.searchCar('BMW', 'Audi' ), Error, "Invalid input!");
            assert.throws(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 3 ), Error, "Invalid input!");
            assert.throws(() => rentCar.searchCar('BMW',  3 ), Error, "Invalid input!");
    
        })

        
        it('NeagativeNoSuchModels', () => {

            assert.throws(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Honda' ), Error, 'There are no such models in the catalog!');
            assert.throws(() => rentCar.searchCar([], 'Honda' ), Error, 'There are no such models in the catalog!');
           
    
        })

        it('Positive', () => {

            let result = rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Audi');

            assert.equal(`There is 1 car of model Audi in the catalog!`,result);
           
    
        })

    });

    describe('calculatePriceOfCarTests', () => {

        it('NeagativeInput', () => {

            assert.throws(() => rentCar.calculatePriceOfCar(2, 5 ), Error, "Invalid input!");
            assert.throws(() => rentCar.calculatePriceOfCar('Audi', '3' ), Error, "Invalid input!");
            assert.throws(() => rentCar.calculatePriceOfCar(2,  '3' ), Error, "Invalid input!");
            assert.throws(() => rentCar.calculatePriceOfCar('Suzuzki', 2), Error, 'No such model in the catalog!');
            assert.throws(() => rentCar.calculatePriceOfCar('', 2), Error, 'No such model in the catalog!');
    
        })

        it('NeagativeInput', () => {

            let result = rentCar.calculatePriceOfCar('Toyota', 2);

            assert.equal(`You choose Toyota and it will cost $80!`, result);
    
        })

        
   

    });

    describe('checkBudgetTests', () => {

        it('NeagativeInput', () => {

            assert.throws(() => rentCar.checkBudget('2', 2, 5 ), Error, "Invalid input!");
            assert.throws(() => rentCar.checkBudget(2, '2', 5 ), Error, "Invalid input!");
            assert.throws(() => rentCar.checkBudget(2, 2, '5'), Error, "Invalid input!");
            assert.throws(() => rentCar.checkBudget('2', '2', '5'), Error, "Invalid input!");
    
        })

        it('PositiveRentCar', () => {

            let result = rentCar.checkBudget(2, 2, 5);

            assert.equal(`You rent a car!`, result);

            let result2 = rentCar.checkBudget(2, 2, 4);

            assert.equal(`You rent a car!`, result);
    
        })

        it('PositiveNotRentCar', () => {

            let result = rentCar.checkBudget(2, 2, 3);

            assert.equal('You need a bigger budget!', result);

            
    
        })

        
   

    });


   

});