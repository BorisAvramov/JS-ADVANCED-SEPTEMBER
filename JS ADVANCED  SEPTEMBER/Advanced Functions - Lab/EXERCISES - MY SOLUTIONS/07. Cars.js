function solve(arrCommands){

    let arrObjects = [];

    arrCommands. forEach(element => {
          let curCOmInfo = element.split(' ');
            if(curCOmInfo.length == 2 && curCOmInfo[0] == 'create'){

                arrObjects.push({
                    name: curCOmInfo[1]
                });
            }
            if(curCOmInfo.length > 2 && curCOmInfo[0] == 'create'){
                let purentObj = arrObjects.find(o => o.name == curCOmInfo[3]);
                let newObj = Object.getPrototypeOf(purentObj);
                newObj.name = curCOmInfo[2];

                // let entriesParentObj = Object.entries(purentObj);

                // for (const [key, value] of entriesParentObj) {
                    
                //     if(key !== 'name'){

                //         newObj[key] =  value;

                //     }

                // }
                
                arrObjects.push(newObj);

            }
            if(curCOmInfo[0] == 'set'){

                let findObj = arrObjects.find(o => o.name == curCOmInfo[1])

                findObj[curCOmInfo[2]] = curCOmInfo[3];

            }
            if(curCOmInfo[0] == 'print'){

                let findObj = arrObjects.find(o => o.name == curCOmInfo[1])
                console.log(findObj);


            }


    });



}











solve(
[
'create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
);