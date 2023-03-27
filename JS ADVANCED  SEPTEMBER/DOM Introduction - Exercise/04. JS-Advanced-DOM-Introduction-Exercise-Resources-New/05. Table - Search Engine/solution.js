function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      
      let searchInputValue = document.getElementById('searchField');


      let tableBodyRowsElements = document.querySelectorAll('.container tbody tr');

      let arrBodyRowsOfTable = Array.from(tableBodyRowsElements);

    


      
      arrBodyRowsOfTable.forEach(tr => {

         if(tr.textContent.includes(searchInputValue.value) && searchInputValue.value !== '' ){

            tr.className = 'select';

         }
         else{
            tr.classList.remove('select');
         }


      })

      searchInputValue.value = '';
   

   }
}