function extractIncreasingSubste(arrNUms){


    let biggest = Number.NEGATIVE_INFINITY;

    let resultExtractArray = arrNUms.reduce((acc, current) => {

        if  (current >= biggest ){

            biggest = current;
            acc.push(biggest);

        }

        return acc;


    }, []);

    return resultExtractArray;


}
 console.log(extractIncreasingSubste([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
    
    ));