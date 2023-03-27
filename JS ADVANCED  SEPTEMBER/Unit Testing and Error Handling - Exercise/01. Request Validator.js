function solve(object){

    let keys = Object.keys(object);

        let properties = ['method', 'uri', 'version', 'message'];


        
            let missing = '';

            for (const curProp of properties) {
                
                if (!keys.includes(curProp)){
                    missing = curProp;
                    break;
                }

            }

            if(missing != ''){
                missing = missing != ''?   missing = getCapitalizedFirstLetter(missing) : '';   
                throw new Error(`Invalid request header: Invalid ${missing}`);
            }
          

        

        if(object.method != 'GET' && object.method != 'POST' && object.method != 'DELETE' && object.method != 'CONNECT'){

            throw new Error(`Invalid request header: Invalid Method`);

        }

        let invalid = false;

        for (let index = 0; index < object.uri.length; index++) {

            let curCharValue = object.uri.charCodeAt(index);
            
            if((curCharValue < 65 && curCharValue > 90) && (curCharValue < 97 && curCharValue > 122) && (curCharValue < 48 && curCharValue > 57)){
                invalid = true;
                break;
            }



        }

        if((object.uri != '*' && invalid == true) || object.uri == ''){

            throw new Error('Invalid request header: Invalid URI');

        }

        if(object.version != 'HTTP/0.9' && object.version != 'HTTP/1.0' && object.version != 'HTTP/1.1' && object.version != 'HTTP/2.0'){

            throw new Error(`Invalid request header: Invalid Version`);

        }

        let pattern = /^[^<>\\&'"]*$/g;

        if(!object.message.match(pattern)){

            throw new Error(`Invalid request header: Invalid Message`);

        }


        return object;

        function getCapitalizedFirstLetter (stringInput){

            let firstLetter = stringInput[0].toUpperCase();
            let reaminig = stringInput.slice(1);
            let result = firstLetter + reaminig;

            return result;


        }



}




console.log(solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  
  
  
  ));