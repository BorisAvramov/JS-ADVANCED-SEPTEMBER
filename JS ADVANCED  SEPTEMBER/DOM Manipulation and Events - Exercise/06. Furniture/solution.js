function solve() {

  let inputElement = document.querySelector('#exercise > textarea');

  let generateButtonElement = document.querySelector('#exercise > button:nth-child(3)');

  let tableBodyElement = document.querySelector('tbody');

  let buyButtonElement = document.querySelector('#exercise > button:nth-child(6)'); 
  
  let outputTextAreaElement = document.querySelector(`#exercise > textarea:nth-child(5)`);

 

  let generateHAndler = function (){

    //     (2) [{…}, {…}]
      // 0
      // : 
        // {img: 'https://www.ikea.com/PIAimages/0447583_PE597395_S5.JPG', name: 'Sofa', price: '259', decFactor: '0.4'}
      // 1
      // : 
      // {img: 'https://www.stylespafurniture.com/wp-content/uploads/2020/03/Cove_3_Door_Wardrobe_1.jpg', name: 'Wardrobe', price: '120', decFactor: '1.2'}
        // length
      // : 
      // 2

    let arr = JSON.parse(inputElement.value);

    // console.log(arr);

    for (const curObject of arr) {
      
      let trElement = document.createElement('tr');

      let tdElementImg = document.createElement('td');
      let imgElement = document.createElement('img');
      imgElement.src = curObject.img;
      tdElementImg.appendChild(imgElement);
      trElement.appendChild(tdElementImg);



      let tdElementName = document.createElement('td');
      let pName = document.createElement('p');
      pName.textContent = curObject.name;
      tdElementName.appendChild(pName);
      trElement.appendChild(tdElementName);

      let tdElementPrice = document.createElement('td');
      let pPrice = document.createElement('p');
      pPrice.textContent = curObject.price;
      tdElementPrice.appendChild(pPrice);
      trElement.appendChild(tdElementPrice);

      let tdElementDecFactor = document.createElement('td');
      let pDec = document.createElement('p');
      pDec.textContent = curObject.decFactor;
      tdElementDecFactor.appendChild(pDec);
      trElement.appendChild(tdElementDecFactor);

      let tdButton = document.createElement('td');
      let inputElementRadio = document.createElement('input');
      inputElementRadio.type = "checkbox";
      tdButton.appendChild(inputElementRadio);
      trElement.appendChild(tdButton);
      tableBodyElement.appendChild(trElement);


    }

  }

  let allradioButtunsElements = document.querySelectorAll('tbody tr input');
  let arr = Array.from(allradioButtunsElements);
      arr.forEach(b => b.disabled = false); //// !!!!!!!!!!!!! foreach

    let BuyHandler = function() {

      let allTrElements = document.querySelectorAll('tbody tr');

      let arrTrElmtns = Array.from(allTrElements);

      let sumPrices = 0;
      let sumDecFac = 0;
      let countChecked = 0;
      let namesChecked = [];
      for (const curTr of arrTrElmtns) {
        
        let curButElement = curTr.querySelector('td:nth-child(5)').children[0];
        
        if(curButElement.checked){

          let curPrice = curTr.querySelector('td:nth-child(3)').children[0].textContent;
          let curDecFac = curTr.querySelector('td:nth-child(4)').children[0].textContent;
          let curName = curTr.querySelector('td:nth-child(2)').children[0].textContent;

          sumPrices += Number (curPrice);
          sumDecFac+= Number(curDecFac);
          countChecked++;
          namesChecked.push(curName);


        }


      }

        let avrDecFact = sumDecFac / countChecked;

        let resultText = '';
        resultText += `Bought furniture: ${namesChecked.join(', ')}\n`;
        resultText+= `Total price: ${sumPrices.toFixed(2)}\n`;
        resultText += `Average decoration factor: ${avrDecFact}`;
    
        outputTextAreaElement.value = resultText;

    }


    generateButtonElement.addEventListener('click', generateHAndler);

     
    buyButtonElement.addEventListener('click', BuyHandler);

}