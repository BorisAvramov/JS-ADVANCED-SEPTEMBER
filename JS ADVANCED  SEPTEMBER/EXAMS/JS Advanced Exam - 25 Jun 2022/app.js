window.addEventListener("load", solve);

function solve() {
  
  

  let ButtonPublishEl = document.getElementById('publish');


  let makeInputEl = document.getElementById('make');
  let modelInputEl = document.getElementById('model');
  let yearInputEl = document.getElementById('year');
  let fuelInputEl = document.getElementById('fuel');
  let originalPriceInputEl = document.getElementById('original-cost');
  let sellingPriceInputEl = document.getElementById('selling-price');
  let profitElement = document.getElementById('profit');

 let totalSum = 0;
  
  ButtonPublishEl.addEventListener('click', (e) => {
    e.preventDefault();

    if(makeInputEl.value == '' || modelInputEl.value == '' || yearInputEl.value == '' || sellingPriceInputEl.value == '' || fuelInputEl.value == '' || originalPriceInputEl.value == '' || originalPriceInputEl.value > sellingPriceInputEl.value ){
      return;
    }



      let tableBodyElement = document.getElementById('table-body');
      let trElement = document.createElement('tr');
      trElement.className = 'row';
      trElement.innerHTML =
      `
        <td>${makeInputEl.value}</td>
        <td>${modelInputEl.value}</td>
        <td>${yearInputEl.value}</td>
        <td>${fuelInputEl.value}</td>
        <td>${originalPriceInputEl.value}</td>
        <td>${sellingPriceInputEl.value}</td>
        <td>
          <button class="action-btn edit">Edit</button>
          <button class="action-btn sell">Sell</button>
        </td>`
      
      tableBodyElement.appendChild(trElement);  
      
      makeInputEl.value = '';
      modelInputEl.value = '';
      yearInputEl.value = '';
      fuelInputEl.value = '';
      originalPriceInputEl.value = '';
      sellingPriceInputEl.value = '';

    let btnEditEl = trElement.querySelector('td:nth-child(7) > button.action-btn.edit').addEventListener('click', (e) => {

     
      makeInputEl.value = tableBodyElement.querySelector('tr').querySelectorAll('td')[0].textContent; 
      modelInputEl.value = tableBodyElement.querySelector('tr').querySelectorAll('td')[1].textContent; 
      yearInputEl.value = tableBodyElement.querySelector('tr').querySelectorAll('td')[2].textContent; 
      fuelInputEl.value = tableBodyElement.querySelector('tr').querySelectorAll('td')[3].textContent; 
      originalPriceInputEl.value = tableBodyElement.querySelector('tr').querySelectorAll('td')[4].textContent; 
      sellingPriceInputEl.value = tableBodyElement.querySelector('tr').querySelectorAll('td')[5].textContent; 

      e.target.parentNode.parentNode.remove();



    });
      
  let btnSellEl = trElement.querySelector('td:nth-child(7) > button.action-btn.sell').addEventListener('click', (e) => {

      let carListEl = document.getElementById('cars-list');
      let sellLiEl = document.createElement('li');
      sellLiEl.className = "each-list";
      let makeModel = tableBodyElement.querySelector('tr').querySelectorAll('td')[0].textContent + ' ' + tableBodyElement.querySelector('tr').querySelectorAll('td')[1].textContent;
      let diff = tableBodyElement.querySelector('tr').querySelectorAll('td')[5].textContent - tableBodyElement.querySelector('tr').querySelectorAll('td')[4].textContent;
      totalSum += diff;
       sellLiEl.innerHTML =
       `
          <span>${makeModel}</span>
          <span>${tableBodyElement.querySelector('tr').querySelectorAll('td')[2].textContent}</span>
          <span>${diff}</span>`

          carListEl.appendChild(sellLiEl);

        e.target.parentNode.parentNode.remove();

      
      profitElement.textContent = totalSum.toFixed(2);
      console.log(profitElement.textContent);


  });

  });




}
