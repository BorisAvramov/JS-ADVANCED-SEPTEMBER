function validate() {
    
    let inputElement = document.getElementById('email');

    inputElement.addEventListener('change', (e) => {

        console.log(e.target.value);

        if(!e.target.value.match(/[a-z]+@[a-z]+\.[a-z]+/g)){

            e.target.setAttribute('class', 'error');

        }
        else{


            e.target.removeAttribute('class'); 
        }



    });


}