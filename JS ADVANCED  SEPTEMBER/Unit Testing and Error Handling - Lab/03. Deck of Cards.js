function solve(arr){


    let result = [];

    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };
        
        for (const cur of arr) {
        
            let face = cur.slice(0, cur.length - 1);
            let suit = cur.slice(cur.length - 1);

         

            // let suit = cur[cur.length - 1];
            // let face = '';

            // for (let index = 0; index < cur.length - 1; index++) {

            //     face += cur[index]
            // }
    
            try {
                

                if(!faces.includes(face) || suits[suit] === undefined){

                    throw Error(`Invalid card: ${face+suit}`);
    
                }
                else{
                    result.push(face+suits[suit]);
    
                }

            } catch (ex) {
                console.log(ex.message);
            }


    
    
        }

        console.log(result.join(' '));
   

}


solve(['5S', '3D', 'QD', '1C']);