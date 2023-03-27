function solve(face, suitInput){

    face = face.toUpperCase();
    suitInput = suitInput.toUpperCase();
    
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    if(!faces.includes(face)){

        throw Error;
    }
   
    let suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    }


    // if(isNaN(Number(face))){

    //     if(Number(face) < 2 || Number(face) > 10){

    //         throw Error;
    //     }

    // }
    // else if(face != 'J' || face != 'Q' || face != 'K' || face != 'A'){

    //     throw Error;;
    // }

  
    let object = {
        face,
        suit: suits[suitInput],
        toString ()  {
            return this.face + this.suit;
        }

    };


    return object;



}


console.log( solve('a', 's').toString());