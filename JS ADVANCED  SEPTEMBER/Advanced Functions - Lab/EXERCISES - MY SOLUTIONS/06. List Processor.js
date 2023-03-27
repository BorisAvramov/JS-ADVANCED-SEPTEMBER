function solve(arr){

let innerCollection = [];

    arr.forEach(element => {

        let [curCom, str] = element.split(' ');

        if(str === undefined){
            console.log(innerCollection.join(','));

        }
        else{

            switch (curCom) {
                case 'add':
                    innerCollection.push(str);
                    break;
                case 'remove':
                   innerCollection =  innerCollection.filter(s => s !== str);
                    break;
                default:
                    break;
            }


        }

        
    });









}



solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);