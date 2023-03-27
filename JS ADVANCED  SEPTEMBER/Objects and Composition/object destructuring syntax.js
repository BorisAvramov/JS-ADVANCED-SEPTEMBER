let city= {

        firstName: 'Varna',
        population: 1000000,
        treasury: 250000,


    }

    


    let {population, ...rest} = city;

    let city1 = city;

    console.log(rest);


    // destructuring creates abolutly new Refference in the HEAP;
    // for example Create CLoning City

    let {...clonedCity} = city

    console.log(clonedCity);

    clonedCity.firstName = 'Burgas';

    console.log(clonedCity);

    console.log(city);


    console.log(clonedCity == city); // false because diffrent references;

    console.log(city1 == city); // true because they have same reff;