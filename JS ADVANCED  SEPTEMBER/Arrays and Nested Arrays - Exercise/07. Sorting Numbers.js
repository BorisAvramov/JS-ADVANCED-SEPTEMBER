function sortingNumbers(arrNUms){

    
    let result = [];

    while(true){

        let smallest = Number.POSITIVE_INFINITY;
        let biggest = Number.NEGATIVE_INFINITY;

        for (const num of arrNUms) {
        
            if(num < smallest ){
                
                smallest = num;

                
            }

            
       }


            result.push(smallest);
            let index = arrNUms.indexOf(smallest);
            arrNUms.splice(index, 1);


       if(arrNUms.length == 0){
        break;
       }
        for (const num of arrNUms) {
        
            if(num > biggest ){
                
                biggest = num;

               
            }
            
    
       }
       result.push(biggest);

       let index2 = arrNUms.indexOf(biggest);
            arrNUms.splice(index2, 1);
       
       if(arrNUms.length == 0){
        break;

       }
    }

    return result;

}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));