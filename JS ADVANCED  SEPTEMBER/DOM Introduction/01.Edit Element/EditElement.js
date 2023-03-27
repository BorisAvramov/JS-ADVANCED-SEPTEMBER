function editElement(element, match, replace) {
    
    
    // while(element.textContent.includes(match)){
    //     element.textContent = element.textContent.replace(match, replace); 

    // }

    //regexp

   let pattern = new RegExp(match, 'g'); 
    element.textContent = element.textContent.replace(pattern, replace); 


}