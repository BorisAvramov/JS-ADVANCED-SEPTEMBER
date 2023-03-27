function sumTable() {

    let tableValuesElements = document.querySelectorAll('tbody tr td:nth-child(2)');
    console.log(tableValuesElements);

    let arr = Array.from(tableValuesElements);

    let sum = 0;
    for (const cur of arr) {
        
        sum += Number(cur.textContent);

    }

    let result = document.getElementById('sum');
    result.textContent = sum;


    console.log(sum);
}