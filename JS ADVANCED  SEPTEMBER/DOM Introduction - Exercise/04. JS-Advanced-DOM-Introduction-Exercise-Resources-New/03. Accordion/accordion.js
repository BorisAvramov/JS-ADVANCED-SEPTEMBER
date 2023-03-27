function toggle() {
    
    let elementPare = document.getElementById('extra');
    let button = document.getElementsByClassName('button')[0];

    if(button.textContent === "More"){
        button.textContent = 'Less';
        elementPare.style.display = 'block';
    }
    else{

        button.textContent = "More";
        elementPare.style.display = 'none';

    }




}