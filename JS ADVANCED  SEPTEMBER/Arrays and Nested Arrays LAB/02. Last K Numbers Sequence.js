function lastKNUmbers(n, k){
    let numN = Number(n);
    let numK = Number(k);

    let resultArrNUm = new Array(numN);
    resultArrNUm.shift();
    resultArrNUm.unshift(1);
    for (let index = 1; index < numN; index++) {
        let curSum = 0;
      for (let index2 = index - 1; index2 >= index - k; index2--) {

        curSum += Number(resultArrNUm[index2]) || 0;


      }

      resultArrNUm[index] = curSum;
       
    }
    return resultArrNUm; 
    // console.log(`[${resultArrNUm.join(', ')}]`);

}
console.log(lastKNUmbers(8, 2)); 