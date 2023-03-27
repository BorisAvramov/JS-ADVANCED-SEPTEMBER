function encodeAndDecodeMessages() {
    
    let inputMessageELement = document.querySelector('#main > div:nth-child(1) > textarea');
    let buttonEncodeAndSend = document.querySelector('#main > div:nth-child(1) > button');

    let outputTextRecievedElement = document.querySelector('#main > div:nth-child(2) > textarea');
    let buttonDecodeElement = document.querySelector('#main > div:nth-child(2) > button');

    let EncodeHandler = function () {

        let textToEncode = inputMessageELement.value;
        let encode = '';



        for (let index = 0; index < textToEncode.length; index++) {
        
            let curCharCode = inputMessageELement.value.charCodeAt(index) + 1;
            encode += String.fromCharCode(curCharCode); 
    
        }

        outputTextRecievedElement.value = encode;
        inputMessageELement.value = '';

        

    }

    buttonEncodeAndSend.addEventListener('click', EncodeHandler);

    let decodeHandler = function () {

            let textToDecode = outputTextRecievedElement.value;

            let decode = ''

            for (let index = 0; index < textToDecode.length; index++) {
        
                let curCharCode = outputTextRecievedElement.value.charCodeAt(index) - 1;
                decode += String.fromCharCode(curCharCode); 
        
            }


            outputTextRecievedElement.value = decode;




    }



    buttonDecodeElement.addEventListener('click', decodeHandler);




}