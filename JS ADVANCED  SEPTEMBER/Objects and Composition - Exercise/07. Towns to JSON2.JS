function solve(input){
  input = input.map(str => str.split('|'));
  
    

    let arrObjects = []

    for (let index = 1; index < input.length; index++) {
        
        let Town = input[0][1].trim();
        let Latitude = input[0][2].trim();
        let Longitude = input[0][3].trim();

       let LatNUm = Number(input[index][2].trim()).toFixed(2);
        let longNum = Number(input[index][3].trim()).toFixed(2);

        let curobject = {

          Town: input[index][1].trim(),
          Latitude: Number(LatNUm),
          Longitude: Number(longNum),


        }

        arrObjects.push(curobject);
    }
    

    let jsonOut = JSON.stringify(arrObjects);

    return jsonOut;

}

console.log(solve(
[
'| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'
]
));