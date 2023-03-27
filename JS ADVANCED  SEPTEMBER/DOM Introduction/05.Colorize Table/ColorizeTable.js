function colorize() {

    //NODELIST HAS FOREACH, BUT HTMLCOLLECTION DOESNT HAVE;



    let tableElements = document.getElementsByTagName('tr');
   let arr = Array.from(tableElements);

   console.log(arr);
//    arr.forEach((d, i) => {

//     if(i % 2 !== 0){

//         d.style.backgroundColor = 'teal';
//     }

// })

   for (let index = 0; index < arr.length; index++) {
        if(index % 2 != 0){
            arr[index].style.backgroundColor = 'teal';

        }
    
   }

}