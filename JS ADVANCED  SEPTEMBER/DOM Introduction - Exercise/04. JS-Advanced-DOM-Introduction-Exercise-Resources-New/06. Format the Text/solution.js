function solve() {
  
  let inputElement = document.getElementById('input').value;
  
  let outputElement = document.getElementById('output');
  let arrInput = inputElement.split('.').filter(s => s != '');

  console.log(arrInput);
  console.log(arrInput.length);

  while (arrInput.length > 0){

    let text = arrInput.splice(0, 3 ).join('. ');
    console.log(text);

    let paragraph = document.createElement('p');
   paragraph.textContent = text + '.';
  outputElement.appendChild(paragraph);

  }

  // if(arrInput.length <= 3){
  //   let text = '';
  //   for (let index = 0; index < arrInput.length; index++) {
     
  //     text += arrInput[index];
  //     if(index !== arrInput.length - 1 ){
  //       text += '. ';
  //     }
      
  //   }
  //   let paragraph = document.createElement('p');
  //   paragraph.textContent = text;
  //   outputElement.appendChild(paragraph);


  // }

  // else if(arrInput.length % 3 === 0){
    
  //   for (let index = 0; index < arrInput.length; index+=3) {
  //     let text = '';
  //     text += arrInput[index] + '. ' + arrInput[index + 1] + '. ' + arrInput[index + 2];

  //     if(index + 2 !== arrInput.length - 1){
        
  //       text += '.'

  //     }
      
  //     let paragraph = document.createElement('p');
  //     paragraph.textContent = text;
  //     outputElement.appendChild(paragraph);

      
  //   }

  
  



}