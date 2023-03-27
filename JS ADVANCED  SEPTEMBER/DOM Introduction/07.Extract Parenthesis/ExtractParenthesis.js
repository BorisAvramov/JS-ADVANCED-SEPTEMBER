function extract(content) {

    let paragraphElement = document.getElementById(content);

    let string = paragraphElement.textContent

    // let pattern = \([^\).]+\)/g;

    let pattern = /\([a-zA-Z ]+\)/g;
   let arr = string.match(pattern);

   let stringResult = '';
//    for (const cur of arr) {
//     let curtoAdd = cur.match(/[a-zA-Z ]+/g)
    
//     stringResult += `${curtoAdd}; `;

//    }

    arr.map(str => stringResult += str.match(/[a-zA-Z ]+/g) + '; ');
    return stringResult;
    

}