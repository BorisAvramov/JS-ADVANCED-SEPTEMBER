function createCity (name, population, treasury){

    let city = {

        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes(){
            this.treasury += Math.floor(this.population * this.taxRate);
        },

        applyGrowth(percentage) {

            this.population += Math.floor( this.population * (percentage / 100));
        },

        applyRecession: function recession(percentage) {

            this.treasury -= Math.floor( this.treasury * (percentage / 100));
        },

    }



    return city;

}

console.log(createCity(
'Tortuga',
7000,
15000
));

let cityObject = createCity('Tortuga', 7000, 15000);

    console.log(cityObject);

     cityObject.collectTaxes();
     console.log(cityObject.treasury);

     cityObject.applyGrowth(5);
     console.log(cityObject.population);