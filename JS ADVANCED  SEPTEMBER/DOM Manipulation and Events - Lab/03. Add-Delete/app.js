function addItem() {
    let inputElement = document.getElementById('newItemText');
    let ulElement = document.getElementById('items');

    let newElement = document.createElement('li');
    if(inputElement.value !== ''){
        newElement.textContent = inputElement.value;
        ulElement.appendChild(newElement);
        inputElement.value = '';

        let aLinkElement = document.createElement('a');
        aLinkElement.href = "#";
        aLinkElement.textContent = '[Delete]';
        
        newElement.appendChild(aLinkElement);
       

        DeleteHandler = function(e) {
            e.currentTarget.parentElement.remove();

        }


        aLinkElement.addEventListener('click', DeleteHandler);



    }
   

   



}