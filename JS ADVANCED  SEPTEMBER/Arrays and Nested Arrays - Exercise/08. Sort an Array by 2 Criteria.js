function sortArray(arrStrings){

    // 1-st let sort = arrStrings.sort((a, b) => a.length - b.length ||  a.localeCompare(b))

    // 2-nd let twoCriteriaFunc = (a, b) => a.length - b.length || a.localeCompare(b);

    // let sort = arrStrings.sort(twoCriteriaFunc);


    let twoCriteriaFunc = (a, b) =>{
        if(a.length == b.length){

            return a.localeCompare(b);
        }
        else{
            return a.length - b.length;
        }

    } 

    let sort = arrStrings.sort(twoCriteriaFunc);






    sort.forEach( (el) => {

        console.log(el);

    }  
    ) ;

}

sortArray(['test', 
'Deny', 
'omen', 
'Default']

);