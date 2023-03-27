function sumFirstLast(stringArr){

    let numFirst = Number(stringArr.shift());
    let lastNUm = Number(stringArr.pop() || 0);

    let sum = numFirst + lastNUm;

    return sum

}

console.log(sumFirstLast(['20', '30', '40']));