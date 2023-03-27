function solve(name, population, treasury){

    //firstWay

    // let city = {

    //     name: name,
    //     population: population,
    //     treasury: treasury,


    // }

    // secondWay = > DYNAMIC

    // let city = {};

    // city.name = name;
    // city.population = population;
    // city.treasury = treasury;


    // THIRD WAY => SHORT SYNTAX

    let city = {name, population, treasury};

    return city
}
console.log(solve('Tortuga',
7000,
15000
));