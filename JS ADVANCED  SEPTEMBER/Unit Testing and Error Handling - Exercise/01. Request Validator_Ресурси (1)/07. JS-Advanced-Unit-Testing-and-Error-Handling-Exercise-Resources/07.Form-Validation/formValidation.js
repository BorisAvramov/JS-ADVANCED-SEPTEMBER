function validate() {
    
    let regexUserName = /^[a-zA-Z0-9]{3,20}$/g;
    let regexEmail = /[^@]+@{1}[^.]+\.[^@]+/g;
    let regexPass = /^\w{5,15}$/g;

    let userNameElement = document.getElementById('username');
    let eMailElement = document.getElementById('email');
    let passElement = document.getElementById('password');
    let confirmPassElement = document.getElementById('confirm-password');

    let submitButtonElement = document.getElementById('submit');
    let divValidElement = document.getElementById('valid');
    let companyButtonelement = document.getElementById('company');
    let companyInfoelement = document.getElementById('companyInfo');
    let companyNUmberElement = document.getElementById('companyNumber');

    companyButtonelement.addEventListener('change', () => {
        if(companyInfoelement.style.display == "block"){
            companyInfoelement.style.display = 'none';

        }
      
        else if(companyInfoelement.style.display == "none"){
            companyInfoelement.style.display = 'block';


        }



    });


    submitButtonElement.addEventListener('click', (e) => {

        e.preventDefault();
        let allIsValid = true;

        if(!userNameElement.value.match(regexUserName)){
            userNameElement.style.border = "solid red";
            allIsValid = false;
        }
        else{
            userNameElement.style.border = "none";
        }

        if(!eMailElement.value.match(regexEmail)){
            eMailElement.style.border = "solid red";
            allIsValid = false;

        }
        else{
            eMailElement.style.border = "none";
        }

        if(!passElement.value.match(regexPass)){
            passElement.style.border = "solid red";
            allIsValid = false;

        }
        else{
            passElement.style.border = "none";
        }

        if(confirmPassElement.value !== passElement.value || confirmPassElement.value == '' || !confirmPassElement.value.match(regexPass)){
            confirmPassElement.style.border = "solid red";
            allIsValid = false;



        }
        else{
            confirmPassElement.style.border = "none";

        }

     

        if (companyInfoelement.style.display == "block"){

            if(companyNUmberElement.value == '' || (companyNUmberElement.value < 1000 || companyNUmberElement.value > 9999)){

                companyNUmberElement.style.border = "solid red";
                allIsValid = false;


            }
            
            else{
                companyNUmberElement.style.border = "none";

            }
        }

        if(allIsValid){

            divValidElement.style.display = "block";

        }
        else {
            divValidElement.style.display = "none";

        }



    });

}
