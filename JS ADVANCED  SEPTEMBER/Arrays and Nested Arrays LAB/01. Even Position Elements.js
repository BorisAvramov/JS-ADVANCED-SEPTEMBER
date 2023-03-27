function evenPosElement(arr){
    let resultArr = [];


    for (let index = 0; index < arr.length; index++) {

        if(index % 2 == 0){
            resultArr.push(arr[index]);
        }


    }
    console.log(resultArr.join(" "));


}

evenPosElement(['5', '10']);