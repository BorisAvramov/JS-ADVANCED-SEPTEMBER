const {bookSelection} = require ('./bookSelection');
const {assert, expect} = require ('chai');

describe('AllTests', () => {


    describe ('isGenreSuitableTests', () => {

        it ('DoNotSuitable', () => {

           let result =  bookSelection.isGenreSuitable('Thriller', 12);
           assert.equal(`Books with Thriller genre are not suitable for kids at 12 age`, result);

           let result2 =  bookSelection.isGenreSuitable('Horror', 11);
           assert.equal(`Books with Horror genre are not suitable for kids at 11 age`, result2);

        });

        it ('Suitable', () => {

            let result =  bookSelection.isGenreSuitable('Thriller', 13);
            assert.equal(`Those books are suitable`, result);
 
            let result2 =  bookSelection.isGenreSuitable('Horror', 14);
            assert.equal(`Those books are suitable`, result2);
            let result3 =  bookSelection.isGenreSuitable('Comedy', 12);
            assert.equal(`Those books are suitable`, result3);
 
 
         });



    });
    describe ('isItAffordableTests', () => {

        it ('NEgativeNotANumberInput', () => {

        assert.throws(() => bookSelection.isItAffordable('2', 5), Error, `Invalid input`);
        assert.throws(() => bookSelection.isItAffordable(2, '5'), Error, `Invalid input`);
        assert.throws(() => bookSelection.isItAffordable('2', '5'), Error, `Invalid input`);

        });

        it ('EnoughMOney', () => {

            let result = bookSelection.isItAffordable(2, 5);

            assert.equal(`Book bought. You have 3$ left`, result);

            let result2 = bookSelection.isItAffordable(5, 5);

            assert.equal(`Book bought. You have 0$ left`,result2);
    
            });

            it ('notEnoughMOney', () => {

                let result = bookSelection.isItAffordable(2, 1);
    
                assert.equal("You don't have enough money", result);
    
                let result2 = bookSelection.isItAffordable(2, 0);
    
                assert.equal("You don't have enough money", result2);
                });


    });

    

    describe ('suitableTitles ', () => {

        it ('NegativeInput', () => {

        assert.throws(() => bookSelection.suitableTitles(2, 'Horror'), Error, `Invalid input`);
        assert.throws(() => bookSelection.suitableTitles(([{ title: "The Da Vinci Code", genre: "Thriller"}], 5), Error, `Invalid input`));
        assert.throws(() => bookSelection.suitableTitles(2, 5), Error, `Invalid input`);

        });
        it ('Positive', () => {

            let result = bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller"}], "Thriller");
            assert.deepEqual(['The Da Vinci Code'], result);


            });
        


    });


})

let arr = [{ title: "The Da Vinci Code", genre: "Thriller"}];
let genre = 'Thriller';

let result =  bookSelection.suitableTitles(arr, genre);
console.log(result);