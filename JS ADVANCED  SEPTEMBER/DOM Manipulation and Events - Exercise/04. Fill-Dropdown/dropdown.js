function addItem() {

    let inputTextElement = document.querySelector('#newItemText');
    let inputValuetElement = document.querySelector('#newItemValue');
    let outputSectionElement = document.querySelector('#menu');

        
        let text = inputTextElement.value;
        let value = inputValuetElement.value;
        console.log(`${text} -> ${value}`); 

        let optionElement = document.createElement('option');
        optionElement.textContent = text;
        optionElement.value = value;

        outputSectionElement.appendChild(optionElement);

        inputTextElement.value = '';
        inputValuetElement.value = '';


}