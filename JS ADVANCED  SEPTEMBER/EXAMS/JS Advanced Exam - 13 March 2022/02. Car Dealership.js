class CarDealership{

    constructor (name ){
        this.name = name;
        this.availableCars  = [];
        this.soldCars  = []; 
        this.totalIncome = 0;

    }


    addCar (model, horsepower, price, mileage) {

        if(model == '' || horsepower < 0 || price < 0  || mileage < 0 ){ //!!!!!!!!!!!!!!!!!!!!!

            throw new Error ("Invalid input!");

        }

        this.availableCars.push( {model, horsepower, price, mileage}  );

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;



    }

    sellCar (model, desiredMileage) {

        let carFound = this.availableCars.find(c => c.model == model);

        if(!carFound){

            throw new Error (`${model} was not found!`);


        }

        let mileageFoundCar = carFound. mileage;

        let priceSold = 0;

        if(mileageFoundCar <= desiredMileage){

            priceSold = carFound.price;

        }
        else if (mileageFoundCar - desiredMileage <= 40000){

            priceSold = carFound.price - carFound.price * 0.05;

        }
        else if (mileageFoundCar - desiredMileage > 40000) {

            priceSold = carFound.price -  carFound.price * 0.1;


        }

        let index = this.availableCars.indexOf(carFound);
        this.availableCars.splice(index, 1);
        this.soldCars.push({model, horsepower: carFound.horsepower, soldPrice: priceSold});
        this.totalIncome += priceSold;

        return `${model} was sold for ${priceSold.toFixed(2)}$`;


    }

    currentCar () {

        let result = [];

        if(this.availableCars.length == 0){

            result.push("There are no available cars");
            return result ; //`!!!!!!!!!!!!!!!
        }
        else{

            result.push("-Available cars:");

            this.availableCars.map(c => result.push (`---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`));
            return result.join('\n').trim();
        }



    }

    salesReport (criteria) {

        if(criteria !== 'horsepower' && criteria !== 'model'){

            throw new Error("Invalid criteria!");

        }

        if (criteria == 'horsepower') {

            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);

        }
        else if (criteria == 'model') {

            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));

        }

        let result = []

        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        result.push(`-${this.soldCars.length} cars sold:`);
        this.soldCars.map(c => result.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`));

        return result.join('\n').trim();



    }


}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));




