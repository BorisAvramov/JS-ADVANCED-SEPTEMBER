function solve(arrStrings){

    let arrHeoroes = [];
    for (const curString of arrStrings) {
        
        let curInfoHeroe = curString.split(' / ');

        let curHeroe = {
            name: curInfoHeroe[0],
            level: Number(curInfoHeroe[1]),
            items: [],

        }

            if(curInfoHeroe[2]){

                curInfoHeroe[2].split(', ').forEach(i => curHeroe.items.push(i));
            }

            // let itemsArr = curInfoHeroe[2];

            // curHeroe.items = itemsArr ? itemsArr.split(', ') : [];
        
            // if(itemsArr){
            //     curHeroe.items = [];
            //     itemsArr.forEach(i => {
            //         if(i){
            //             curHeroe.items.push(i)
        
            //         }
        
            //     });
            // }
           

        
        

        arrHeoroes.push(curHeroe);
    }

    let jsonResultArrHeroes = JSON.stringify(arrHeoroes);
    return jsonResultArrHeroes;

}

console.log(solve(
    [
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
]
));