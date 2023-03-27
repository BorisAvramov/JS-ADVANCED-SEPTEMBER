function solve() {
    
    let firstNamEl = document.getElementById('fname');
    let lastNamEl = document.getElementById('lname');
    let emailEl = document.getElementById('email');
    let birthDateEl = document.getElementById('birth');
    let positionEl = document.getElementById('position');
    let salaryEl = document.getElementById('salary');

    let tableBpodyEl = document.getElementById('tbody');
    let sumEl = document.getElementById('sum');

    let totalSumInNumber = 0;

    let btnAddWorker = document.getElementById('add-worker').addEventListener('click', (e) => {

        e.preventDefault();

        if(firstNamEl.value !== '' && lastNamEl.value !== '' && emailEl.value !== '' && birthDateEl.value !== '' && positionEl.value !== '' && salaryEl.value !== ''){

            addWorker(firstNamEl,lastNamEl, emailEl,  birthDateEl, positionEl,salaryEl, tableBpodyEl );

            clearInputs(firstNamEl, lastNamEl, emailEl, birthDateEl, positionEl, salaryEl);





        }

        function addWorker(firstNamEl,lastNamEl, emailEl,  birthDateEl, positionEl,salaryEl, tableBpodyEl ){

            let trEl = elGenerator('tr');

            let tdFNameEl = elGenerator('td', firstNamEl.value, trEl);
            let tdLNameEl = elGenerator('td', lastNamEl.value, trEl);
            let tdEmailEl = elGenerator('td', emailEl.value, trEl);
            let tdDateEl = elGenerator('td', birthDateEl.value, trEl);
            let tdPositionEl = elGenerator('td', positionEl.value, trEl);
            let tdSalaryEl = elGenerator('td', salaryEl.value, trEl);

            let tdButtonsEl = elGenerator('td');

            let btnFiredEl = elGenerator('button', 'Fired', tdButtonsEl);
            btnFiredEl.setAttribute('class', 'fired');
            let btnEditEl = elGenerator('button', 'Edit', tdButtonsEl);
            btnEditEl.setAttribute('class', 'edit');

            trEl.appendChild(tdButtonsEl);
            tableBpodyEl.appendChild(trEl);

            totalSumInNumber += Number( salaryEl.value);

            sumEl.textContent = totalSumInNumber.toFixed(2);


            btnEditEl.addEventListener('click', (e) => {

                firstNamEl.value = e.target.parentNode.parentNode.children[0].textContent;
                lastNamEl.value = e.target.parentNode.parentNode.children[1].textContent;
                emailEl.value = e.target.parentNode.parentNode.children[2].textContent;
                birthDateEl.value = e.target.parentNode.parentNode.children[3].textContent;
                positionEl.value = e.target.parentNode.parentNode.children[4].textContent;
                salaryEl.value = e.target.parentNode.parentNode.children[5].textContent;

                totalSumInNumber -= Number(e.target.parentNode.parentNode.children[5].textContent);
                sumEl.textContent = totalSumInNumber.toFixed(2);

                e.target.parentNode.parentNode.remove();



            });

            btnFiredEl.addEventListener('click', (e) => {

                let salary = Number (e.target.parentNode.parentNode.children[5].textContent);

                totalSumInNumber -= salary;

                sumEl.textContent = totalSumInNumber.toFixed(2);
                e.target.parentNode.parentNode.remove();


            });

        }




       function clearInputs(firstNamEl, lastNamEl, emailEl, birthDateEl, positionEl, salaryEl){

            firstNamEl.value = '';
            lastNamEl.value = '';
            emailEl.value = '';
            birthDateEl.value = '';
            positionEl.value = '';
            salaryEl.value = '';


        }

        function elGenerator (type, content, parent){

            let element = document.createElement(type);
            element.textContent = content;
            if(parent){
                parent.appendChild(element);
            }
            return element;

        }






    });


}
solve()