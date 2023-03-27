function pieceOfPie(arr, string1, string2){

    let startIndex = arr.indexOf(string1);
    let endIndex = arr.indexOf(string2) + 1;

    let result = arr.slice(startIndex, endIndex);

    return result

}

console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));