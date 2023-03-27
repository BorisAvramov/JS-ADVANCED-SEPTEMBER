function addRemove(arrCommands){

    let arr = [];

    for (let index = 0; index < arrCommands.length; index++) {
        
        if(arrCommands[index] == 'add'){

            arr.push(index + 1);

        }
        else if(arrCommands[index] == 'remove'){
            arr.pop();
        }
        
    }
    // if !arr.some(x => x) / like Any in C#
    if(arr.length == 0){

        console.log('Empty');
    }
    else{
        console.log(arr.join('\n'));
    }
    

}
addRemove(['remove', 
'remove', 
'remove']


);