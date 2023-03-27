const {companyAdministration} = require('./companyAdministration');
const {assert, expect} = require('chai');

describe ('Tests', () => {

    describe ('hiringEmployeeTests', () => {

        it ('TestsPoition', () =>{

            assert.throw(() => companyAdministration.hiringEmployee('Ivan', 'zidar', 5), `We are not looking for workers for this position.`);            

        }) 

        it ('TestsYearsPos', () =>{

            let result = companyAdministration.hiringEmployee('Ivan', 'Programmer', 3);
            assert.equal(`Ivan was successfully hired for the position Programmer.`, result);
                     

        }) 

        it ('TestsYearsNeg', () =>{
            
            let result = companyAdministration.hiringEmployee('Ivan', 'Programmer', 2);

            assert.equal(`Ivan is not approved for this position.`, result);
                     

        }) 

        





    });
    describe ('calculateSalaryTests ', () => {

        it ('TestsNotANUmber', () =>{

            assert.throw(() => companyAdministration.calculateSalary('5'), "Invalid hours");            

        }) 

        it ('TestsNegativeNumber', () =>{

            assert.throw(() => companyAdministration.calculateSalary(-5), "Invalid hours");            

                     

        }) 

        it ('TestsPos', () =>{


            let result = companyAdministration.calculateSalary(2);
            assert.equal(30, result);
            let otherResult = companyAdministration.calculateSalary(161)
            assert.equal(3415, otherResult);

        }) 


    });

       describe ('firedEmployeeTests ', () => {

        it ('nevalidInput', () =>{

            assert.throw(() => companyAdministration.firedEmployee('az ti toi', 2), "Invalid input");            
            assert.throw(() => companyAdministration.firedEmployee(['Pesho', 'Ivan'], '2'), "Invalid input");            
            assert.throw(() => companyAdministration.firedEmployee(['Pesho', 'Ivan'], -1), "Invalid input");            
            assert.throw(() => companyAdministration.firedEmployee(['Pesho', 'Ivan'], 5), "Invalid input");            

        }) 

     

        it ('TestsPos', () =>{

            let arr = ['Pesho', 'Ivan', 'Mitko'];
            let result = companyAdministration.firedEmployee(arr, 1);
            assert.equal('Pesho, Mitko', result);
        }) 


    });


})




