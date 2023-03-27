function calc() {
    
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);

    let result = num1 + num2;
    console.log(result);

    let valueelement = document.getElementById('sum');
    valueelement.value = result;
}
