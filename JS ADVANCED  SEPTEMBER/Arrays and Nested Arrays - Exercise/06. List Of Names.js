function sortedArray(arrNames){

    arrNames.sort( (a, b) => a.localeCompare(b));

    let count = 1;
    // for (const name of arrNames) {
        
    //     console.log( `${count}.${name}`);
    //     count++;

    // }
    arrNames.forEach((element) => {
        
        console.log( `${count}.${element}`);
        count++;

    });



}
sortedArray(["John", "Bob", "Christina", "Ema"]);