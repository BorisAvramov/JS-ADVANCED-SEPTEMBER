window.addEventListener("load", solve);

function solve() {
  
  let makeEl = document.getElementById('make');
  let modelEl = document.getElementById('model');
  let yearEl = document.getElementById('year');
  let fuelEl = document.getElementById('fuel');
  let originalPriceEl = document.getElementById('original-cost');
  let sellingPriceEl = document.getElementById('selling-price');

  let tabelBodyEl = document.getElementById('table-body');
  let btnPublishEl = document.getElementById('publish')

  let carsListEl = document.getElementById('cars-list');
  let profitEL = document.getElementById('profit');

  let sumProfit = 0;



  btnPublishEl.addEventListener('click', (e) => {


    e.preventDefault();




    
    if( makeEl.value != '' && modelEl.value != '' && yearEl.value != '' && fuelEl.value != '' && originalPriceEl.value != '' && sellingPriceEl.value != '' && Number(sellingPriceEl.value) > Number (originalPriceEl.value)){


      addInputsToTableBody(makeEl, modelEl, yearEl, fuelEl, originalPriceEl, sellingPriceEl, tabelBodyEl);
      clearInputs(makeEl, modelEl, yearEl, fuelEl, originalPriceEl, sellingPriceEl);


    }

    

  });

  function addInputsToTableBody(makeEl, modelEl, yearEl, fuelEl, originalPriceEl, sellingPriceEl, tabelBodyEl){

    let trEl = elGenerator('tr');
    trEl.setAttribute('class', 'row');

    let tdMakeEl = elGenerator('td', makeEl.value, trEl);
    let tdMOdelEl = elGenerator('td', modelEl.value, trEl);
    let tdYearEl = elGenerator('td', yearEl.value, trEl);
    let tdFuelEl = elGenerator('td', fuelEl.value, trEl);
    let tdOriginalPiceEl = elGenerator('td', originalPriceEl.value, trEl);
    let tdSellingPriceEl = elGenerator('td', sellingPriceEl.value, trEl);

    let tdBtnsEl = elGenerator('td');

    let btnEditnEl = elGenerator('button', 'Edit', tdBtnsEl);
    btnEditnEl.setAttribute('class', 'action-btn edit');
    let btnSellEl = elGenerator('button', 'Sell', tdBtnsEl);
    btnSellEl.setAttribute('class', 'action-btn sell');


    trEl.appendChild(tdBtnsEl);

    tabelBodyEl.appendChild(trEl);

    btnEditnEl.addEventListener('click', (e) => {

      makeEl.value = e.target.parentNode.parentNode.children[0].textContent;
      modelEl.value = e.target.parentNode.parentNode.children[1].textContent;
      yearEl.value = e.target.parentNode.parentNode.children[2].textContent;
      fuelEl.value = e.target.parentNode.parentNode.children[3].textContent;
      originalPriceEl.value = e.target.parentNode.parentNode.children[4].textContent;
      sellingPriceEl.value = e.target.parentNode.parentNode.children[5].textContent;

      e.target.parentNode.parentNode.remove();



    });

    btnSellEl.addEventListener('click', (e) => {


      let liEl = elGenerator('li');

      liEl.setAttribute('class', 'each-list');

      letSpanMakeMOdelEl = elGenerator('span', `${e.target.parentNode.parentNode.children[0].textContent} ${e.target.parentNode.parentNode.children[1].textContent}`, liEl);
      letSpanYearEl = elGenerator('span', e.target.parentNode.parentNode.children[2].textContent, liEl);
      let originalPrice = Number(e.target.parentNode.parentNode.children[4].textContent);
      let sellingPrice = Number(e.target.parentNode.parentNode.children[5].textContent);
      let diff = sellingPrice - originalPrice;
      letSpanYearEl = elGenerator('span', diff, liEl);


      carsListEl.appendChild(liEl);

      e.target.parentNode.parentNode.remove();

      sumProfit += diff;

      profitEL.textContent = sumProfit.toFixed(2);



    });



  }

  function elGenerator (type, content, parent){

let element = document.createElement(type);
element.textContent = content;
if(parent){

  parent.appendChild(element);
}
return element;

  }

    function clearInputs (makeEl, modelEl, yearEl, fuelEl, originalPriceEl, sellingPriceEl) {
      makeEl.value = '';
      modelEl.value = '';
      yearEl.value = '';
      fuelEl.value = '';
      originalPriceEl.value = '';
      sellingPriceEl.value = '';

    }

}
