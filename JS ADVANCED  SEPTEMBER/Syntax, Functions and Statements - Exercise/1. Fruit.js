function calcPriceFruit(fruit, grams, pricePreKg){

    let pricePerGras = pricePreKg / 1000;
    
    let priceFruit = grams * pricePerGras;

    let kgFruit = grams / 1000;
    console.log(`I need $${priceFruit.toFixed(2)} to buy ${kgFruit.toFixed(2)} kilograms ${fruit}.`);


}

calcPriceFruit('orange', 2500, 1.80);