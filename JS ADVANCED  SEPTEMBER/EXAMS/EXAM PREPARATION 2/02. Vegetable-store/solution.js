    class VegetableStore {

        constructor (owner, location ) {

        this.owner = owner;
        this.location = location;
        this.availableProducts = [];

            }

            loadingVegetables (vegetables){

                for (const curV of vegetables) {
                    
                    const info = curV.split(" ");
                    let type = info[0];
                    let quantity = Number(info[1]);
                    let price = Number(info[2]);



                    if (!this.availableProducts.some(p => p.type == type)){

                        this.availableProducts.push({type, quantity, price});


                    }
                    else{

                        let findObj = this.availableProducts.find(o => o.type == type);

                        findObj.quantity +=  quantity;
                        if(price > findObj.price){

                            findObj.price =  price;
                        }


                    }


                }

                let result = ''
                this.availableProducts.forEach(p => result += `${p.type}, `)
                

                    return `Successfully added ${result.substring(0, result.length - 2)}`;
            
            }

            buyingVegetables (selectedProducts){

                let totalPrice  = 0;

                for (const cur of selectedProducts) {
                    let info = cur.split(' ');
                    let type = info[0];
                    let quantity = Number ( info[1]);
        
                    if (!this.availableProducts.some(p => p.type == type)) {
        
                        throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
                    }
        
                    let vegetableSelected = this.availableProducts.find(p => p.type == type);
                    if (quantity > vegetableSelected.quantity) {
        
                        throw new Error (`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
        
                    }

                    totalPrice += quantity * (vegetableSelected.price);
                    vegetableSelected.quantity -= quantity;


                }
            

                return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`

            }

            rottingVegetable (type, quantity){

                if (!this.availableProducts.some(p => p.type == type)){

                    throw new Error (`${type} is not available in the store.`) ;
                }

                let vegetableSelected = this.availableProducts.find(p => p.type == type);
                if (quantity > vegetableSelected.quantity ) {

                    vegetableSelected.quantity = 0;
                    return `The entire quantity of the ${type} has been removed.`

                }
                else {
                    vegetableSelected.quantity -= quantity;

                    return `Some quantity of the ${type} has been removed.`


                }



            }

            revision (){
                let result = '';
                result += `Available vegetables:\n`;
                this.availableProducts.sort((a, b) => a.price - b.price).forEach(p => result += `${p.type}-${p.quantity}-$${p.price}\n`);
                result += `The owner of the store is ${this.owner}, and the location is ${this.location}.`;
                return result.trimEnd();
            }


    } 
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());



