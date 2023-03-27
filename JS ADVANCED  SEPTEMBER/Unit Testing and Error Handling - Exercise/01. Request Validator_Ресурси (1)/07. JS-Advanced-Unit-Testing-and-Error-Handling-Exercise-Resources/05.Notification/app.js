function notify(message) {
  
  let DivElementNot = document.getElementById('notification');

  DivElementNot.innerText = message;

  DivElementNot.style.display = 'block';

  DivElementNot.addEventListener('click', (e) => {

      e.target.style.display = "none";



  });

}