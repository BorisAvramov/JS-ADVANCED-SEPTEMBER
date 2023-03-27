class Company {


    constructor () {

        this.departments = {};
    }

    addEmployee (name, salary, position, department) {

        if(!name || !salary || !position || !department || salary < 0){

            throw new Error('Invalid input!');
        }
        if(!this.departments[department]){
            this.departments[department] = [];
        }


        let curEmployee = {name, salary, position};
        this.departments[department].push(curEmployee);

        return `New employee is hired. Name: ${curEmployee.name}. Position: ${curEmployee.position}`;


    }
    bestDepartment(){

        let bestDepartmentNAme = '';
        let bestDepArrEmplyes = [];
        let bestAverageSalaray = Number.MIN_SAFE_INTEGER;

        let entries = Object.entries(this.departments);

       
       for (const [key,value] of entries) {


            let arrEmployes = value;
            let curSumSalary = 0;


            arrEmployes.map(e => {

                curSumSalary+= e.salary;

            });

            let curAvrSalary = curSumSalary / arrEmployes.length;
            if(curAvrSalary > bestAverageSalaray){

                bestAverageSalaray = curAvrSalary;
                bestDepartmentNAme = key;
                bestDepArrEmplyes = arrEmployes;

            }
       }

       let result =  `Best Department is: ${bestDepartmentNAme}\nAverage salary: ${bestAverageSalaray.toFixed(2)}\n`
        bestDepArrEmplyes.sort((a, b) => {
        
        return b.salary - a.salary || a.name.localeCompare(b.name);
        
        
       }).map(e => {

        result += `${e.name} ${e.salary} ${e.position}\n`;


       });
       return result.trim();
       

    }



}

let c = new Company();
 c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
