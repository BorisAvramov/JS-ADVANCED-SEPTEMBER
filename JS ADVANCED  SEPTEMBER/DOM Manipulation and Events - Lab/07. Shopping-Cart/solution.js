function solve() {

   let AddProductsButtonsElements = document.querySelectorAll('.add-product');
   console.log(AddProductsButtonsElements);

   let textElement = document.getElementsByTagName('textarea')[0];
   console.log(textElement);

   let checOutButtonElement = document.querySelector('.checkout');

   let set = new Set();
   let totatlPrice = 0;


   let AddProductHandler = (e) => {

      let productDetailSElement = e.target.parentElement.previousElementSibling;
     
      let nameProduct = productDetailSElement.children[0].textContent;
      console.log(nameProduct);

      let productPrice = Number(e.target.parentElement.nextElementSibling.textContent);
      console.log(productPrice);
      set.add(nameProduct);
      totatlPrice += productPrice;
      textElement.value += `Added ${nameProduct} for ${productPrice.toFixed(2)} to the cart.\n`;

   }

   for (const curButton of AddProductsButtonsElements) {
      
      curButton.addEventListener('click', AddProductHandler);

   }
 

   let CheckOutHandlerTotalPrice  = (e) => {

      textElement.value += `You bought ${Array.from(set).join(', ')} for ${totatlPrice.toFixed(2)}.`;

      disableButtons();

   }
   

   checOutButtonElement.addEventListener('click', CheckOutHandlerTotalPrice);
   function disableButtons(){

      let arrButtonsElements = Array.from(document.querySelectorAll('button'));
      arrButtonsElements.forEach(b => b.disabled = true);

   }




//    function solve() {
//       let textArea = document.querySelector('body > div > textarea');
//       let totalPrice = 0;
//       let listOfUniqueThings = [];
//       let addBtn = document.getElementsByClassName('add-product');
//       let arrayAddBtn = Array.from(addBtn);
//       for (let i = 0; i < arrayAddBtn.length; i++) {
//           arrayAddBtn[i].addEventListener('click', function one() {
//               let name = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-details > div`).textContent;
//               let price = document.querySelector(`body > div > div:nth-child(${i + 2}) > div.product-line-price`).textContent;
//               if (!listOfUniqueThings.includes(name)) {
//                   listOfUniqueThings.push(name);
//               }
//               let result = `Added ${name} for ${price} to the cart.\n`;
//               totalPrice += Number(price);
//               textArea.value += result;
//           });
//       }
//       let checkOut = document.querySelector('body > div > button');
//       checkOut.addEventListener('click', function final() {
//           let finalSting = `You bought ${listOfUniqueThings.join(', ')} for ${totalPrice.toFixed(2)}.`;
//           textArea.value += finalSting;
//           disableButtons();
//       });
   
//       function disableButtons() {
//          let buttons = Array.from(document.querySelectorAll('button'));
//          buttons.forEach(button => button.disabled = true);
//       }
//   }


}