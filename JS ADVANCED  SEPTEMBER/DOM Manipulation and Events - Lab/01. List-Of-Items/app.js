function addItem() {
    
    let inputElement = document.getElementById('newItemText');

    let ulParentElement = document.getElementById('items');

    let newLi = document.createElement('li');
    newLi.textContent = inputElement.value;

    ulParentElement.appendChild(newLi);


}