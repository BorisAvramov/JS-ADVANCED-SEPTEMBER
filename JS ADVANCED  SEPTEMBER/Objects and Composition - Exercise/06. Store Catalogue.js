function solve(arrStrings){

arrStrings.sort()

let char ='';
for (const cur of arrStrings) {
    
    curProduct = cur.split(' : ');

    if(curProduct[0][0] !== char){
        console.log(curProduct[0][0]);
        char = curProduct[0][0];
    }

    console.log(`  ${curProduct[0]}: ${curProduct[1]}`);


}

}


solve(
    [
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
]
);
