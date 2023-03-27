
function solution (){

    let resultStr = '';


    return {

        print : () => {

            console.log(resultStr);
            
        },

        append : (string) => {
            
            resultStr += string;

            


        },
        removeStart: (n) => {

            resultStr = resultStr.substring(n);

        },
        removeEnd : (n) => {

             resultStr =  resultStr.slice(0, resultStr.length - n);


        }




    }



}



let firstZeroTest = solution();


firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
