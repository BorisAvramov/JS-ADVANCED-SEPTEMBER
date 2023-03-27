function validate() {
    let inputEmailElement = document.getElementById('email');

    let pattern = /[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+/g;

    inputEmailElement.addEventListener('change', CkeckEmail)


    function CkeckEmail (event) {

        if(pattern.test(event.target.value)){

            console.log(event.target.value);
            event.target.removeAttribute('class');
            return;


        }
        

            event.target.className = 'error';

            // if(!pattern.test(event.target.value)){

            //     event.target.className = 'error';
            // }
            // else{
    
            //     event.target.className = '';
            // }
           


        

    }

    // if(inputEmailElement.value != ' '){

    //     let valide = pattern.test(inputEmailElement.value);

    //     console.log(valide);

    //     if(valide == false){
    //         inputEmailElement.className = 'error';


    //     }
    //     else{

    //         inputEmailElement.className = '';
    //     }

    // }

  

}