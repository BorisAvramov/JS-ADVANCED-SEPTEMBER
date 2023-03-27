function LargestNum (num1, num2, num3){
    let largets = Number.MIN_SAFE_INTEGER;

    let nums = new Array(num1, num2, num3);
     var numsArr = new Array(3);
     numsArr[0] = num1;
     numsArr[1] = num2;
     numsArr[2] = num3;
 
    for(let i = 0; i < nums.length; i++){

        if(nums[i] > largets){
            largets = nums[i]
        }
    }

    console.log(`The largest number is ${largets}.`);

}

// largestNum(-3, -5, -22.5);