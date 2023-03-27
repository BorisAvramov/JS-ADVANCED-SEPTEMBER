function solve (arrStrings){

    let products = [];

    for (const curString of arrStrings) {
        
        let [townName, productName, productPrice] = curString.split(' | ');

        productPrice = Number(productPrice);

        if(products.some(p => p.productName === productName)){

            let product = products.find(p => p.productName === productName);

            if(product.productPrice > productPrice){
                product.productPrice = productPrice;
                product.townName = townName;
            }

        }
        else{
            products.push({productName, productPrice, townName});
        }


    }

    for (const prod of products) {
        let values = Object.values(prod);

        console.log(`${values[0]} -> ${values[1]} (${values[2]})`);

    }


}

solve(
    [
'Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'
]
);