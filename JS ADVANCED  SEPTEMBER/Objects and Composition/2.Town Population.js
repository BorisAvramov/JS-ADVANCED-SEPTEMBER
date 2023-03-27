function solve(arrStrings){

let registry = {};

    // for of
    for (const arr of arrStrings) {
        
        let info = arr.split(' <-> ');
        let town = info[0];
        let population = Number( info[1]);
//1st 
        // if(registry[town]){

        //     registry[town] += population
        // }
        // else{
        //     registry[town] = population;
        // }
//2end
        if(!registry[town]){

            registry[town] = 0;
        }

        registry[town] += population;

    }




// for (let index = 0; index < arrStrings.length; index++) {
    
//     let [town, population] =  arrStrings[index].split(' <-> ');
//     let keys = Object.keys(registry);

//     if(registry.hasOwnProperty(town)){

//         registry[town] += Number(population);

//     }
//     else{
//         registry[town] = Number(population);
//     }

   
    
// }
// 1st print
// let entries = Object.entries(registry);

// entries.forEach(kvp => {

//     console.log(`${kvp[0]} : ${kvp[1]}`);

// });

// 2second print for in

for (const key in registry) {
    console.log(`${key} : ${registry[key]}`);
}




}
solve([
'Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);