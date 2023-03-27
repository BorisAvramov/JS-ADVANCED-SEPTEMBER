
function solve(jsonInput, criteria){

    let inputInfoArrObjects = JSON.parse(jsonInput);

    let [prop, value] = criteria.split('-');
    
    inputInfoArrObjects
        .filter(x => x[prop] == value)
        .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
        .forEach(x => console.log(x));



    // let sortedObj =  inputInfoArrObjects.filter(o => o[prop] === value);
    // let count = 0;
    // sortedObj.forEach(o => {

        

    //     console.log(`${count++}. ${o.first_name} ${o.last_name} - ${o.email}`);

        
    // });

}









solve (`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
);