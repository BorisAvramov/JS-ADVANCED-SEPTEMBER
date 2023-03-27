function printRandomNum (){

    let num = Math.round(Math.random() * 100);

    document.body.innerHTML += `<div>${num}</div>`;

}