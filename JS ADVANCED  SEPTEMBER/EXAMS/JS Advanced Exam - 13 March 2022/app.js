function solve() {

    let titleEl = document.getElementById('title');
    let recipientNameEl = document.getElementById('recipientName');
    let messageEl = document.getElementById('message');

    let btnAddEl = document.getElementById('add');
    let btnResetEl = document.getElementById('reset');

    let listEl = document.getElementsByClassName('list-mails')[0];
    let ulElementFromListEl = document.querySelector('#list');

    let sentListEl = document.getElementsByClassName('sent-list')[0];

    let deletedListUlElement = document.getElementsByClassName('delete-list')[0];

    btnAddEl.addEventListener('click', (e) => {

        e.preventDefault();

        if(titleEl != '' && recipientNameEl != '' && messageEl != ''){

            AddToList(ulElementFromListEl, titleEl.value, recipientNameEl.value, messageEl.value);

            clearInputs();
        }

    });

    btnResetEl.addEventListener('click', (e) => {
        e.preventDefault();

        clearInputs();


    });


    function AddToList(ulElementFromListEl, titleEl, recipientNameEl, messageEl){

        let liEl = elGenerator('li');

        let h4TitleEl = elGenerator('h4', `Title: ${titleEl}`, liEl);
        let h4RecepientEl = elGenerator('h4', `Recipient Name: ${recipientNameEl}`, liEl);
        let spanEl = elGenerator('span', messageEl, liEl);

        let divEl = elGenerator('div', '', liEl);
        divEl.setAttribute("id", "list-action");
        let btnSend = elGenerator('button', 'Send', divEl);
        btnSend.type = "submit";
        btnSend.setAttribute('id', 'send');
        let btnDelete = elGenerator('button', 'Delete', divEl);
        btnDelete.type = "submit";
        btnDelete.setAttribute('id', 'delete');
        
        ulElementFromListEl.appendChild(liEl);

        btnDelete.addEventListener('click', (e) => DeleteFromList(e, deletedListUlElement));

        btnSend.addEventListener('click', (e) => Send(e, sentListEl ));


    }
    function elGenerator (type, content, parent) {

        let element = document.createElement(type);
        element.textContent = content;
        if(parent){
            parent.appendChild(element);
        }

        return element;

    }

    function clearInputs(){

        titleEl.value = '';
        recipientNameEl.value = '';
        messageEl.value = '';


    }

    function Send(e, sentListEl ){
        e.preventDefault();
        let liElFromUlElFromList = e.target.parentNode.parentNode;
        
        let liEl = elGenerator('li');
        let spanToEl = elGenerator('span', `To: ${liElFromUlElFromList.children[1].textContent.slice(16)}`, liEl);
        let spanTotleEl = elGenerator('span', `${liElFromUlElFromList.children[0].textContent}`, liEl);
        let divEl = elGenerator('div', '', liEl);
        divEl.setAttribute('class', 'btn');
        let btnDelete = elGenerator('button', 'Delete', divEl);
        btnDelete.type = 'submit';
        btnDelete.setAttribute('class', 'delete');

        sentListEl.appendChild(liEl);

        e.target.parentNode.parentNode.remove();

        btnDelete.addEventListener('click', (e) => DeleteFromSentList(e, deletedListUlElement));


    }
    
    function DeleteFromList (e, deletedListUlElement) {

        let targetLiElement = e.target.parentNode.parentNode;

        let liEl = elGenerator('li');
     

        let spanTo = elGenerator('span', `To: ${targetLiElement.children[1].textContent.slice(16)}`, liEl);
        let spanTitle = elGenerator('span', `${targetLiElement.children[0].textContent}`, liEl);

        deletedListUlElement.appendChild(liEl);

        e.target.parentNode.parentNode.remove();

    }
    function DeleteFromSentList(e, deletedListUlElement){
        // debugger
        let targetLiElement = e.target.parentNode.parentNode;
        targetLiElement.querySelector('div').remove()
        deletedListUlElement.appendChild(targetLiElement);
        // e.target.parentNode.parentNode.remove();


    }



}
solve()