function solve(array){
    
    let dictJuicesQuntity = {};
    let dictJuicesCount = {};

    array.forEach(element => {
        
        let [juice, quantity] = element.split(' => ');
        // if(!dictJuicesQuntity[juice]){
        //     dictJuicesQuntity[juice] = 0;
        // }
        if(!dictJuicesQuntity[juice]){    
            dictJuicesQuntity[juice] = 0;
        }

        dictJuicesQuntity[juice]+= Number( quantity);

       if(dictJuicesQuntity[juice] >= 1000){

        if(!dictJuicesCount[juice]){
            dictJuicesCount[juice] = 0
        }



       }


     


    });



    let entries = Object.entries(dictJuicesQuntity);
    for (const [key,value] of entries) {
        let count = Math.floor(value / 1000);
        dictJuicesCount[key] = count;
    }


    for (const [key, value] of Object.entries(dictJuicesCount)) {

        if (value != 0){

            console.log(key + ' => ' + value);
        }


    }

}



solve(
    ['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
        )
