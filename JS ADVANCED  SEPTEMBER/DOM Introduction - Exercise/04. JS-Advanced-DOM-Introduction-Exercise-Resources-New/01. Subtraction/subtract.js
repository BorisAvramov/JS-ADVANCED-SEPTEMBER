function subtract() {

    let first =  Number( document.getElementById('firstNumber').value);
    let second = Number (document.getElementById('secondNumber').value);

    let result = first - second;
    console.log(result);

    document.getElementById('result').textContent = result.toString();
    
}