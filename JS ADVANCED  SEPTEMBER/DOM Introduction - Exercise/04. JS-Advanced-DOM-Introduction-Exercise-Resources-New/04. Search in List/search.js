function search() {
   
   let townsElements = document.querySelectorAll('#towns li');
   let resulElemen = document.getElementById('result');

   let arrTowns = Array.from(townsElements);

   arrTowns.map(l => {
      l.style.textDecoration="none";
      l.style.fontWeight = "normal";

   });
   

   let searchTextElement = document.getElementById('searchText').value;

   arrTowns = arrTowns.filter(l => l.textContent.includes(searchTextElement) && searchTextElement !== '').map(l => {
      l.style.textDecoration="underline";
      l.style.fontWeight = "bold";

   });


   resulElemen.textContent =  `${arrTowns.length} matches found`;


}
