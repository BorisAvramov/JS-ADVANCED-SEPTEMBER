function solve(arrStrings){

    let outputObj = {};

    for (let index = 0; index < arrStrings.length; index+=2) {
        
        outputObj[arrStrings[index]] = Number(arrStrings[index + 1]);
        
    }

    console.log(outputObj);

}
solve(
    ['Yoghurt', '48', 'Rise', '138', 'Apple', '52']
    );