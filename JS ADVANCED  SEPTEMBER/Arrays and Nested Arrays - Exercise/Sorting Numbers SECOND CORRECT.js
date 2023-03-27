function sortingNumber(input) {

    let resultArr = [];

    let sort = input.sort((a, b) => a - b);
  
//[-3, 1, 3, 18, 31, 48, 52, 56, 63, 65]
    while (sort.length != 0) {
        
        resultArr.push(sort.shift());
        resultArr.push(sort.pop());


    }

    return resultArr
 
 
 
 
 
}
console.log(sortingNumber([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));