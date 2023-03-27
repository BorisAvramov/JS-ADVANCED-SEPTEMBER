window.addEventListener("load", solve);

function solve (){

    let productTypeEl = document.getElementById('type-product');

    let descriptionEl = document.getElementById('description');

    let clientNameEl = document.getElementById('client-name');
    let clientPfoneEl = document.getElementById('client-phone');
    
    let recievedOrdersEl = document.getElementById('received-orders');

    let btnSendForm = document.querySelector('#right > form > button');

    let completeOrdersEl = document.getElementById('completed-orders');
    btnSendForm.addEventListener('click', (ev) => addToRecievedOrder(ev));

    function addToRecievedOrder(e){

        e.preventDefault();

        if (descriptionEl.value !== '' && clientNameEl.value !== '' && clientPfoneEl.value !== ''){

            AddOrder (productTypeEl.value, descriptionEl.value, clientNameEl.value, clientPfoneEl.value, recievedOrdersEl);

            CleanInputs (productTypeEl, descriptionEl, clientNameEl, clientPfoneEl );


        }



    }

    function AddOrder (productTypeEl, descriptionEl, clientNameEl, clientPfoneEl, recievedOrdersEl) {

        let divEl = ElGenerator('div');
        divEl.setAttribute("class", "container");

        let h2El = ElGenerator('h2', `Product type for repair: ${productTypeEl}`, divEl);
        let h3El = ElGenerator('h3', `Client information: ${clientNameEl}, ${clientPfoneEl}`, divEl);
        let h4El = ElGenerator('h4', `Description of the problem: ${descriptionEl}`, divEl);

        let btnStartRepair = ElGenerator('button', "Start repair", divEl);
        btnStartRepair.setAttribute('class', 'start-btn');
        let btnFinishRepair = ElGenerator('button', "Finish repair", divEl);
        btnFinishRepair.setAttribute('class', 'finish-btn');
        btnFinishRepair.setAttribute('disabled', true);
        recievedOrdersEl.appendChild(divEl);


        btnStartRepair.addEventListener('click', (e) => startReapair(e, btnFinishRepair));

    } 


    function startReapair(e, btnFinishRepair){

        e.target.setAttribute("disabled", true);
        btnFinishRepair.disabled = false;

        btnFinishRepair.addEventListener('click', (e) => complete(e, completeOrdersEl));

    }


    function complete(e, completeOrdersEl){

        let divEl = ElGenerator('div');
        divEl.setAttribute('class', 'container');
        let h2EL = ElGenerator('h2', `${e.target.parentNode.querySelector('h2').textContent}`, divEl);
        let h3EL = ElGenerator('h3', `${e.target.parentNode.querySelector('h3').textContent}`, divEl);
        let h4EL = ElGenerator('h4', `${e.target.parentNode.querySelector('h4').textContent}`, divEl);
        completeOrdersEl.appendChild(divEl);

        e.target.parentNode.remove();

        let btnClear = document.getElementsByClassName('clear-btn')[0];
        btnClear.addEventListener('click', (e) => {
            let completedAllElements = e.target.parentNode.getElementsByClassName('container');
            let arr = Array.from(completedAllElements);
            arr.forEach(e => e.remove())

        });

    }

    function ElGenerator (type, content, parent){
        let element = document.createElement(type);

        element.textContent = content;
        if(parent){

            parent.appendChild(element);

        }
        return element;

    }
    function CleanInputs (productTypeEl, descriptionEl, clientNameEl, clientPfoneEl ){

        productTypeEl.value = 'Computer';
        descriptionEl.value = '';
        clientNameEl.value = '';
        clientPfoneEl = '';

    }

}