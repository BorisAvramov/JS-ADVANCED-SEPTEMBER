function demo(input){

    let ar = input.split(/[, !?]+/)

   let toUpperAr =  ar.map(e => e.toUpperCase());
    console.log(toUpperAr.join(',   '));
}
demo('Hi, how are you?');