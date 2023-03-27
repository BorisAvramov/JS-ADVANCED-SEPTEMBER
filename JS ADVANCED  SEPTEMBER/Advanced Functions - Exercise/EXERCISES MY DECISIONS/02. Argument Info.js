
function solve(argumnets){

let dict = {

}
    
for (const curA of arguments) {
    
    let type = typeof curA;
    console.log(`${type}: ${curA}`);

    if(!dict[type]){
        dict[type] = 0;
    }
    dict[type] ++;

}

Object.keys(dict).sort((a, b) => dict[b] - dict[a]).forEach(key => console.log(`${key} = ${dict[key]}`))



// let entries = Object.entries(dict);

// entries.sort((a, b) => b[1] - a[1]);
//     for (const [key, value] of entries) {
//         if (value != 0) {
//             console.log(`${key} = ${value}`);

//         }


//     }


// }




}










solve('cat', 42, function () { console.log('Hello world!'); });