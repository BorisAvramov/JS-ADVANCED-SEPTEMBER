function create(words) {
   
   let contentElement = document.querySelector('#content');

   for (const word of words) {
      
      let curDivElement = document.createElement('div');
      let curParElement = document.createElement('p');
      curParElement.textContent = word;
      curParElement.style.display = 'none';
      curDivElement.appendChild(curParElement);


      contentElement.appendChild(curDivElement);

   }
   displayToggleHandler = (e) => {

      let targetParagElement = e.target.children[0];
      
      if(targetParagElement.style.display === 'inline-block'){
         targetParagElement.style.display = 'none';
         
      }
      else{
         targetParagElement.style.display = 'inline-block';

      }



   }

 
   contentElement.addEventListener('click', displayToggleHandler)

   // #content > div:nth-child(1) > p


}