window.addEventListener('load', solve);

function solve() {
    
    let modelEl = document.getElementById('model');
    let yearEl = document.getElementById('year');
    let descriptionEl = document.getElementById('description');
    let priceEl = document.getElementById('price');

    let btnAddEl = document.getElementById('add');

    let furnitureList = document.getElementById('furniture-list');

    let totalPriceEl = document.getElementsByClassName('total-price')[0];

    btnAddEl.addEventListener('click', (e) => {

        e.preventDefault();

        if(modelEl.value != '' && yearEl.value !== '' && descriptionEl.value != '' && priceEl.value !== '' && yearEl.value > 0 && priceEl.value > 0){

            addToTable (e, modelEl.value, yearEl.value, descriptionEl.value, priceEl.value, furnitureList);


            clearInputs (modelEl, yearEl, descriptionEl, priceEl);
        }


    });


    function  addToTable (e, modelEl, yearEle, descriptionEl, priceEl ){

        let tr1El = elGenerator('tr');
        tr1El.setAttribute('class', 'info');
        let td1 = elGenerator('td', modelEl, tr1El);
        
        let td2 = elGenerator('td', Number (priceEl).toFixed(2), tr1El);
        let td3 = elGenerator('td');
        tr1El.appendChild(td3);
        let btnMOreInfoEl = elGenerator('button', 'More Info', td3);
        btnMOreInfoEl.setAttribute('class', 'moreBtn');
        let btnBuyItEl = elGenerator('button', 'Buy it', td3);
        btnBuyItEl.setAttribute('class', 'buyBtn');

        furnitureList.appendChild(tr1El);

        let tr2El = elGenerator('tr');
        tr2El.setAttribute('class', 'hide');
        let td4  = elGenerator('td', `Year: ${Number( yearEle)}`, tr2El);
        let td5 = elGenerator('td', `Description: ${descriptionEl}`, tr2El);
        td5.colSpan = "3";

        furnitureList.appendChild(tr2El);

        btnMOreInfoEl.addEventListener('click', (e) => {

            if(e.target.textContent == 'More Info'){
                tr2El.style.display = "contents";
            }
            else {

                tr2El.style.display = "none";
            }

            // tr2El.style.display = tr2El.style.display == 'none' ? 'contents' : 'none';


            e.target.textContent = e.target.textContent == 'More Info' ? 'Less Info' : 'More Info';


        });

        btnBuyItEl.addEventListener('click', (e) => {

            let total = Number(totalPriceEl.textContent);
            let proba = e.target.parentNode.parentNode.querySelector(':nth-Child(2)');
            console.log(proba.textContent);
            total += Number( e.target.parentNode.parentNode.children[1].textContent);

            totalPriceEl.textContent = total.toFixed(2);

            e.target.parentNode.parentNode.remove();

        });



    }

    function clearInputs (modelEl, yearEl, descriptionEl, priceEl){

        modelEl.value = '';
        yearEl.value = '';
        descriptionEl.value = '';
        priceEl.value = '';


    }

    function elGenerator (type, content, parent){
        let element = document.createElement(type);
        element.textContent = content;
        if(parent){
            parent.appendChild(element);
        }

        return element;

    }


}
