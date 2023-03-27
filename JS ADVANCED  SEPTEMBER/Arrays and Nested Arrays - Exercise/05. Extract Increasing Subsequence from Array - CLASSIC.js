function extractIncreasingSubste(arrNUms){

    let biggest = Number.NEGATIVE_INFINITY;

    let arrExtract = [];

   


    for (let index = 0; index < arrNUms.length; index++) {
        
       


        if(arrNUms[index] >= biggest){

            


            biggest = arrNUms[index];
            arrExtract.push(arrNUms[index]);

        }
        
    }
    return arrExtract;

}
 console.log(extractIncreasingSubste([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
    
    ));