 function demo (arr){
    let num = Number(arr[0]);

    for (let index = 1; index < arr.length; index++) {
        let operation = arr[index];
        switch (operation) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
            break;
             case 'spice':
                num += 1;
            break;
            case 'bake':
                num *= 3;
            break;
            case 'fillet':
               num -= num * 0.2;
            break;
            default:
                break;
        }

        console.log(num);

    }
 }
 demo(new Array(9, 'dice', 'spice', 'chop', 'bake', 'fillet'));