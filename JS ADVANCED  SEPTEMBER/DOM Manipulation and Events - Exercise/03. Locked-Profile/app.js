function lockedProfile() {

    let buttonsElements = document.querySelectorAll('button');
    let dicHiddenElement = document.querySelector('#user3HiddenFields');

    console.log(buttonsElements);

    for (const curButton of buttonsElements) {
          
        curButton.addEventListener('click', function buttonShow (e) {

            let curLockRadioElement = e.target.parentElement.querySelector('input[value = "lock"]');
            console.log(curLockRadioElement);
            let curUnLockRadioElement = e.target.parentElement.querySelector('input[value = "unlock"]');
            console.log(curUnLockRadioElement);
            let curHiddenElement = e.target.parentElement.querySelector('div');

            if(curUnLockRadioElement.checked){

                curHiddenElement.style.display = 'block';
                e.target.textContent = 'Hide it'

                curButton.addEventListener('click', function buttonHide(e) {
                    if(curUnLockRadioElement.checked){

                        curHiddenElement.style.display = 'none';
                        e.target.textContent = 'Show more';

                    }



                } )
               

            }
           


        } );


    }

}