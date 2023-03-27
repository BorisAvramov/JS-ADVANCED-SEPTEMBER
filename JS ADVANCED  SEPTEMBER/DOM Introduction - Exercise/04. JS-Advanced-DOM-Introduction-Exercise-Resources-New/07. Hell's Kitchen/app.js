function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      
      let inputElement = document.querySelector('textarea').value;     
      let input = JSON.parse(document.querySelector('textarea').value); 


      let bestHotelName = '';

      let hotels = {};


      let bestAvSalary = Number.MIN_SAFE_INTEGER;
      let bestMaxsal = Number.MIN_SAFE_INTEGER;

      for (const curHotel of input) {
         
        

         let [nameHotel, workers] = curHotel.split(' - ');

         let workersInfor = workers.split(', ');

         for (const worker of workersInfor) {
            
            let [nameWorker, salary] = worker.split(' ');

            if(!hotels.hasOwnProperty(nameHotel)){

               hotels[nameHotel] = {};

            }
            if(hotels.hasOwnProperty(nameHotel)){

               hotels[nameHotel][nameWorker] = Number( salary) ;
               

            }



         }


         
      }
      let entries = Object.entries(hotels);


      for (const curHotelEntry of entries) {
         
         let curAvareageSal = 0;

         let nameKey = curHotelEntry[0];
         let valuesWorkers = curHotelEntry[1]
         let entriesWorkers = Object.entries(valuesWorkers);
         let sumSalarues = 0;
         let curMaxSalary = 0;

         for (const [name, salary] of entriesWorkers ) {
            
            sumSalarues += salary;
            
            curMaxSalary = salary > curMaxSalary ? salary : curMaxSalary;
         }

         curAvareageSal = sumSalarues / entriesWorkers.length;

         if(curAvareageSal > bestAvSalary){

            bestAvSalary = curAvareageSal;
            bestHotelName = nameKey;
            bestMaxsal = curMaxSalary;


         }


      }


            let bestRestElementOutput = document.querySelector('#bestRestaurant p');
            let textRest = `Name: ${bestHotelName} Average Salary: ${bestAvSalary.toFixed(2)} Best Salary: ${bestMaxsal.toFixed(2)}`
            bestRestElementOutput.textContent = textRest

         let entriesBestHotel = Object.entries(hotels[bestHotelName]).sort((a, b) => b[1] - a[1]);
         console.log(entriesBestHotel);
         let textWorkers = '';
         for (const [name, sal] of entriesBestHotel) {
            
            textWorkers += `Name: ${name} With Salary: ${sal} `;

         }
               let workersElementOutput = document.querySelector('#workers p');
               workersElementOutput.textContent = textWorkers;











   //    let pattern = /"[^".]+"/g;
      
   //    let arr = inputElement.match(pattern);

   //    let arrOfRestorants = []

   //    let bestRestorant = {};
   //    let maxAverage = Number.MIN_SAFE_INTEGER;

   //    for (const cur of arr) {
         


   //       let hotelInfo = cur.slice(1, cur.length - 1);
   //       let hotel = hotelInfo.split(' - ');

   //       let nameRest = hotel[0];
   //       let workers = Array.from( hotel[1].split(', '));
        
   //       let curRest = {nameRest, workers}
   //       if(!arrOfRestorants.some(o => o.nameRest === nameRest)){
   //          arrOfRestorants.push(curRest);

   //       }
   //       else{

   //          for (const worker of workers) {
   //             console.log(arrOfRestorants);

   //             let restorant = arrOfRestorants.find(r => r.nameRest == nameRest);
   //             restorant.workers.push(worker); // PROBLEMMMMMMMMMMMMMMMMM!!!!!!!!!!!

   //          }

   //       }

   //    }

      

   //    for (const restorant of arrOfRestorants) {

   //       let sumSalaries = 0;
   //       let maxSalary = Number.MIN_SAFE_INTEGER;
   //       for (const worker of restorant.workers) {
            
   //          let workerInfo = worker.split(' ');
   //          let salary = Number(workerInfo[1]);
   //          if(salary > maxSalary){

   //             maxSalary = salary;

   //          }
   //          sumSalaries+=salary;
   //          let avarerage = sumSalaries / restorant.workers.length;
   //          if(avarerage > maxAverage){
   
   //             maxAverage = avarerage
   
   //             bestRestorant.name = restorant.nameRest;
   //             bestRestorant.avarerage = maxAverage;
   //             bestRestorant.maxSalary = maxSalary;
   //             bestRestorant.workers = restorant.workers;
   
   //          }

   //       }

      
   //    }



   //    let bestRestElementOutput = document.querySelector('#bestRestaurant p');
   //    let workersElementOutput = document.querySelector('#workers p');

   //    let textRest = `Name: ${bestRestorant.name} Average Salary: ${bestRestorant.avarerage.toFixed(2)} Best Salary: ${bestRestorant.maxSalary.toFixed(2)}`

   //    bestRestElementOutput.textContent = textRest;

   //    let textOutputWorkers = '';

   //    console.log(bestRestorant.workers);

   //    let arrayWorkersObjects = []


   //    for (const worker of bestRestorant.workers) {
   //       let [name, salary] = worker.split(' ')
   //       let cur = {name, salary};
   //       arrayWorkersObjects.push(cur);
   //    }

   //    console.log(arrayWorkersObjects);

   //    arrayWorkersObjects.sort((a, b) => {

   //       return b.salary - a.salary;


   //    });

   //    console.log(arrayWorkersObjects);

   //    for (const worker of arrayWorkersObjects) {
         
         

   //       textOutputWorkers += `Name: ${worker.name} With Salary: ${Number(worker.salary)} `;

   //    }
   //    workersElementOutput.textContent = textOutputWorkers.trim();

   //  }
   }

}