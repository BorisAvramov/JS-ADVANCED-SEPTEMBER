function solve() {
  
  let textElement = document.getElementById('text').value.toLowerCase();

  let arrText = Array.from(textElement.split(' '));
  console.log(arrText);

  let convention = document.getElementById('naming-convention').value;

  let resultElement = document.getElementById('result');

  
  let result = '';

  if(convention == 'Camel Case' || convention == 'Pascal Case'){

    arrText.map((s, i) => {

      if(i > 0 || convention == 'Pascal Case'){
        let sub = s.slice(1);
        s = s[0].toUpperCase() + sub;
        

        
      }
      result+=s;


    });
  
  }
  else{
    result += 'Error!';
  }

  resultElement.textContent = result;

}
