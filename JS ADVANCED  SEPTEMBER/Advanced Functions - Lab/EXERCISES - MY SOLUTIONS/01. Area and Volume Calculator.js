function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, arrObjectsCordinates){

  let  arr = JSON.parse(arrObjectsCordinates);

    let resultArrObj = [];

    for (const points of arr) {
        
        resultArrObj.push(
            {
                area: area.call(points),
                volume: vol.call(points)
            }
        );
    }





    // for (let index = 0; index < arr.length; index++) {

    //     let curOb = arr[index];
    //     curOb.areaFumc = area;
    //     curOb.volumeFunc = vol;

    //     let areaValue = curOb.areaFumc();
    //     let volumeValue =curOb.volumeFunc();
    //     let curObj = {area: areaValue, volume: volumeValue};
    //     resultArrObj.push(curObj);


        
    // }

    

    return resultArrObj;

}






console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    ));