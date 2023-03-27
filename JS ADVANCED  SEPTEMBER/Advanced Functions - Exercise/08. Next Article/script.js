function getArticleGenerator(articles) {
    // TODO
    
    let arr = articles;
    let divEl = document.querySelector('#content');


    return function solve (){
        // debugger
        if (arr.length > 0) {
            
            let articleEl = document.createElement('article');
            articleEl.innerText = arr.shift();

            divEl.appendChild(articleEl);


        }
        

    }


}
