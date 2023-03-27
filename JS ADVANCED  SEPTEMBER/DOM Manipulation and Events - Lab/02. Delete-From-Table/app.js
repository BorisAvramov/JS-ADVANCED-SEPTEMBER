function deleteByEmail() {
    
    let inputEmailElement = document.querySelector('input[name = "email"]')

    let tableRowsElement = document.querySelectorAll('tr td');
  //  let emailCellElements = document.querySelectorAll('tr td:nth-of-type(2)');


    let resultElement = document.getElementById('result');
    let ArrayRows = Array.from(tableRowsElement);
    console.log(ArrayRows);

     let targetElement = ArrayRows.find(td => td.textContent === inputEmailElement.value);

    console.log(targetElement);

    if(targetElement){

        targetElement.parentElement.remove();
        resultElement.textContent = 'Deleted';

    }
    else{
        resultElement.textContent = 'Not found.';

    }

}