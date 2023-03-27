function solve(orderObject){

let carProduced = {};

let engineStorage = [

    { power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 }


]

carProduced.model = orderObject.model;

let engine = {};

if(orderObject.power <= engineStorage[0].power  ){
    engine = engineStorage[0];
}
else if(orderObject.power <= engineStorage[1].power ){
    engine = engineStorage[1];

}
else{
    engine = engineStorage[2];

}

carProduced.engine = engine;

carProduced.carriage = {type: orderObject.carriage, color: orderObject.color};

let wheelSize = orderObject.wheelsize % 2 === 0 ? orderObject.wheelsize - 1 : orderObject.wheelsize;
carProduced.wheels = Array(4).fill(wheelSize);

return carProduced;

}

console.log(solve(
{
model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 
}
));