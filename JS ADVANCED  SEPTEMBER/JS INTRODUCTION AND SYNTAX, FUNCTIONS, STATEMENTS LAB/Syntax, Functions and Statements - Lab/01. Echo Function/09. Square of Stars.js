function Rectangle(size = 5){

    



    for (let index = 1; index <= size; index++) {
        let arr = new Array(size);
        

        for (let index = 0; index < size; index++) {

            arr[index] = '*';

            
        }
        console.log( arr.join(' '));

    }

    



}
// Rectangle();