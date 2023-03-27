class Garden {

    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage  = [];

    }

    addPlant (plantName, spaceRequired){

        if(!this.plants.some(p => p.plantName == plantName)){
            if(spaceRequired > this.spaceAvailable){ //!!!

                throw new Error("Not enough space in the garden.");
            }
    
            this.plants.push({plantName, spaceRequired, ripe:false, quantity:0});
            this.spaceAvailable -= spaceRequired;
    
            return `The ${plantName} has been successfully planted in the garden.`;


        }


        
    }


    ripenPlant(plantName, quantity){


        let plantFound = this.plants.find(p => p.plantName == plantName);

        if(!plantFound){

            throw new Error(`There is no ${plantName} in the garden.`);


        }

        if(plantFound.ripe == true){

            throw new Error (   `The ${plantName} is already ripe.`);
        }

        if(quantity <= 0){
            
            throw new Error(`The quantity cannot be zero or negative.`);

        }

        plantFound.quantity += quantity;

        plantFound.ripe = true;

        if(quantity == 1){

            return `${quantity} ${plantName} has successfully ripened.`;
        }
        else if (quantity > 1){
            return `${quantity} ${plantName}s have successfully ripened.`;

        }


    }

    harvestPlant(plantName) {
        let plantFound = this.plants.find(p => p.plantName == plantName);
        
        if(!plantFound){

            throw new Error(`There is no ${plantName} in the garden.`);


        }

        if(plantFound.ripe == false){

            throw new Error (   `The ${plantName} cannot be harvested before it is ripe.`);
        }

        let index = this.plants.indexOf(plantFound);

        this.plants.splice(index, 1);

        this.storage.push({plantName, quantity: plantFound.quantity});

        this.spaceAvailable += plantFound.spaceRequired;

        return `The ${plantName} has been successfully harvested.`


    }
    generateReport(){
        let result = [];
        result.push(`The garden has ${ this.spaceAvailable } free space left.`);

        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));

        result.push(`Plants in the garden: ${this.plants.map(p => p.plantName).join(', ')}`);

        if (this.storage.length == 0){

            result.push("Plants in storage: The storage is empty.");
        }
        else{

            result.push(`Plants in storage: ${this.storage.map(p => {

                return `${p.plantName} (${p.quantity})`;


            }).join(', ')}`);

        }

        return result.join('\n').trim();





    }



}


const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());







