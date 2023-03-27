function focused() {
    
    let getInputElements = document.querySelectorAll('input[type = "text"]');
    console.log(getInputElements);


    const focusHandlerActivateDivSection = (e) => {

        // e.target.parentElement.className =  ("focused");
        e.target.parentElement.classList.add ("focused");




    } 
    const blurHandlerDeActivateDivSection = (e) => {

            // e.target.parentElement.classList.remove('focused');
            e.target.parentElement.className = '';

    }

    for (const curInput of getInputElements) {
        
        curInput.addEventListener('focus', focusHandlerActivateDivSection);
        curInput.addEventListener('blur', blurHandlerDeActivateDivSection);

    }


}