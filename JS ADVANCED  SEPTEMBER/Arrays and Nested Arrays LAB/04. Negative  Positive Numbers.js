function NegPosNumbers(arrNUm){

    let resultArr = [];

    for (let index = 0; index < arrNUm.length;  index++) {
     
        if(arrNUm[index] < 0){
            resultArr.unshift(arrNUm[index]);
        }
        else{
            resultArr.push(arrNUm[index]);
        }

    }
    // for (let index = 0; index < resultArr.length; index++) {

    //     console.log(resultArr[index]);



    // }

    console.log(resultArr.join('\n'));

}
NegPosNumbers([3, -2, 0, -1]);