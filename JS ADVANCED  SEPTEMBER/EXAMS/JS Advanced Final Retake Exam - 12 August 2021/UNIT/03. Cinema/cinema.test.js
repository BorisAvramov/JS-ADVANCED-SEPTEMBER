const {cinema} = require('./cinema');
const {assert, expect} = require ('chai');



describe ('AllTests', () =>{

    describe('showMoviesTestss', () => {

        it('isArrayTests', () => {

            let arr = ['King Kong', 'The Tomorrow War', 'Joker'];
            let result = cinema.showMovies(arr);

            expect(arr).instanceOf(Array);

        })

        it('ZeroLengthArray', () => {

            let arr = [];
           let result =  cinema.showMovies(arr);

            expect(result).equal('There are currently no movies to show.');

        })
        it('Pozitive', () => {

            let arr = ['King Kong', 'The Tomorrow War', 'Joker'];
           let result =  cinema.showMovies(arr);

            expect(result).equal('King Kong, The Tomorrow War, Joker');

        })


    });

    describe('ticketPriceTests', () => {

        it('NegativeType', () => {

            assert.throws(() => cinema.ticketPrice('Neshto'),Error,'Invalid projection type');
            // assert.throw(() => cinema.ticketPrice('Neshto'),'Invalid projection type');

        })

        it('PositiveType', () => {

           
    

            	let result = cinema.ticketPrice('Premiere');
                assert.equal(12,result );
                
        })

        it('PositiveType2', () => {

           
    
            let result3 = cinema.ticketPrice('Discount');
            assert.equal(5.50,result3 );
    })
    it('PositiveType3', () => {

           
        let result2 = cinema.ticketPrice('Normal');
        assert.equal(7.50,result2 );
       
})



    });


    describe('swapSeatsInHallTests', () => {

        it('NegativeTests', () => {

           let result =  cinema.swapSeatsInHall('2', 3);
           assert.equal('Unsuccessful change of seats in the hall.', result)
           let result2 =  cinema.swapSeatsInHall(-1, 3);
           assert.equal('Unsuccessful change of seats in the hall.', result2)

           let result3 =  cinema.swapSeatsInHall(21, 3);
           assert.equal('Unsuccessful change of seats in the hall.', result3)

           let result4 =  cinema.swapSeatsInHall(2, '3');
           assert.equal('Unsuccessful change of seats in the hall.', result4)
           let result5 =  cinema.swapSeatsInHall(2);
           assert.equal('Unsuccessful change of seats in the hall.', result5)

           let result6 =  cinema.swapSeatsInHall();
           assert.equal('Unsuccessful change of seats in the hall.', result6)
           

           let result7 =  cinema.swapSeatsInHall(0, 0);
           assert.equal('Unsuccessful change of seats in the hall.', result7)
           let result8 =  cinema.swapSeatsInHall(-1, -4);
           assert.equal('Unsuccessful change of seats in the hall.', result8)
           let result9 =  cinema.swapSeatsInHall('2', '3');
           assert.equal('Unsuccessful change of seats in the hall.', result9)
           let result10 =  cinema.swapSeatsInHall(0, 2);
           assert.equal('Unsuccessful change of seats in the hall.', result10)
           let result11 =  cinema.swapSeatsInHall(2, 0);
           assert.equal('Unsuccessful change of seats in the hall.', result11)
           let result12 =  cinema.swapSeatsInHall(21, 21);
           assert.equal('Unsuccessful change of seats in the hall.', result12)
      
        })
        it('NegativeTests2', () => {

          
 
            let result7 =  cinema.swapSeatsInHall(2, 2);
            assert.equal('Unsuccessful change of seats in the hall.', result7)
 
 
 
         })
         it('NegativeTests3', () => {

          
 
            let result6 =  cinema.swapSeatsInHall(2, 21);
            assert.equal('Unsuccessful change of seats in the hall.', result6)
 
 
 
         })
         it('NegativeTests4', () => {

          
            let result5 =  cinema.swapSeatsInHall(2, -1);
            assert.equal('Unsuccessful change of seats in the hall.', result5)
 
 
 
         })
         it('NegativeTests5', () => {

          
            let result5 =  cinema.swapSeatsInHall(0, 3);
            assert.equal('Unsuccessful change of seats in the hall.', result5)
 
 
 
         })
         it('NegativeTests6', () => {

            let result6 =  cinema.swapSeatsInHall(3, 0);
            assert.equal('Unsuccessful change of seats in the hall.', result6)
 
 
 
         })





        it('Positive', () => {

            let result =  cinema.swapSeatsInHall(2, 3);
            assert.equal('Successful change of seats in the hall.', result)
         
 
 
            
         
 
         })


    });



} )




