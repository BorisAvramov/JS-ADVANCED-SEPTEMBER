function print(arrString, n){

    let resultArr = [];
    	let count = 1;
    
        for (let index = 0; index < arrString.length; index+= n) {

            resultArr.push(arrString[index]);
            
        }
        return resultArr

}

console.log(print(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));