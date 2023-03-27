function solution(){

    let dictMicroelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0


    };
    let libraryRec   = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger:   {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10 ,carbohydrate: 10, fat: 10, flavour: 10}


    }
    return (input) => {
        
        let info = input.split(' ');
     
        if(info[0] == 'restock'){
           
            dictMicroelements[info[1]] += Number (info[2]);
            return'Success';

        }
        if(info[0] == 'prepare'){

            let product = info[1];
            let incredient = '';
            let quant = Number(info[2]);

            let entries = Object.entries (libraryRec[product]);
            IsError = false;

           for (const [key, value] of entries) {
            
            if(dictMicroelements[key] * quant < value){ 
                IsError = true;
                incredient = key;
                break;
            }

           }

           if (IsError == true) {
            
            return `Error: not enough ${incredient} in stock`;
           }
           else{

            for (const [key, value] of entries) {
                dictMicroelements[key] -= value * quant;


            }
            return'Success';

           }

        }
        if(info[0] == 'report'){

            let result = [];
            let entries = Object.entries(dictMicroelements);
            for (const [key, value] of entries) {

                result.push(`${key}=${value}`);


            }

            return result.join(' ');

        }

    }


}


    let manager = solution (); 
    console.log (manager ("prepare turkey 1")); // Success 
    console.log (manager ("restock protein 10")); // Error: not enough carbohydrate in stock 
    console.log (manager ("prepare turkey 1")); // Error: not enough carbohydrate in stock 
    console.log (manager ("restock carbohydrate 10")); // Error: not enough carbohydrate in stock 
    console.log (manager ("prepare turkey 1")); // Error: not enough carbohydrate in stock 
    console.log (manager ("restock fat 10")); // Error: not enough carbohydrate in stock 
    console.log (manager ("prepare turkey 1")); // Error: not enough carbohydrate in stock 
    console.log (manager ("restock flavour 10")); // Error: not enough carbohydrate in stock 
    console.log (manager ("prepare turkey 1")); // Error: not enough carbohydrate in stock 
    console.log (manager ("report")); // Error: not enough carbohydrate in stock 
