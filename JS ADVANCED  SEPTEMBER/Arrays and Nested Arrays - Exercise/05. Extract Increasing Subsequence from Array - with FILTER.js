function extractIncreasingSubste(arrNUms){


    let biggest = Number.NEGATIVE_INFINITY;

    let resultExtractArray = arrNUms.filter( num => {

        if  (num >= biggest){

            biggest = num;
            return true;
        }
        else{

            return false;


        }



    });

    return resultExtractArray;


}
 console.log(extractIncreasingSubste([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
    
    ));