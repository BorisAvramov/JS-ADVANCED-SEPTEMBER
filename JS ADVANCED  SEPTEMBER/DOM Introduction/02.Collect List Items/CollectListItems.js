function extractText() {
    //get refference to DOM element / return NodeList
   let NodeList = document.querySelectorAll('#items li');
    // convert to Array
    let arrItems = Array.from(NodeList);
    // for every li element convert content tostring
    arrItems = arrItems.map(e => e.textContent.toString());
    
   //Get refference to textarea;
    let result = document.querySelector('#result');
    
    //ASSIGN  value to result
    result.textContent = arrItems.join('\n');

}
extractText();