class SummerCamp {

    constructor (organizer, location  ) {

        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants  = []; 

    }

    
    registerParticipant (name, condition, money){

        
        if (!this.priceForTheCamp[condition]) {

            throw new Error ("Unsuccessful registration at the camp.") ;
        }


        if(this.listOfParticipants.some(p => p.name == name)){

            return `The ${name} is already registered at the camp.`;
        }

        if(money < this.priceForTheCamp[condition]){

            return `The money is not enough to pay the stay at the camp.`   ;

        }
        else {
            this.listOfParticipants.push({name, condition, power: 100, wins: 0});
            return `The ${name} was successfully registered.`;
        }

    



    }

    
    unregisterParticipant (name){

        let foundParticipiant = this.listOfParticipants.find(p => p.name == name);

        if(!foundParticipiant){

            throw new Error(`The ${name} is not registered in the camp.`);

        }

        let index = this.listOfParticipants.indexOf(foundParticipiant);
        this.listOfParticipants.splice(index, 1);

        return `The ${name} removed successfully.`;


    }

    timeToPlay (typeOfGame, participant1, participant2){

        
            let found1 = this.listOfParticipants.find(p => p.name == participant1);
        let found2 = this.listOfParticipants.find(p => p.name == participant2);

        if(typeOfGame == 'Battleship'){

            checError ( this.listOfParticipants, participant1)

            found1.power += 20;
            return    `The ${participant1} successfully completed the game ${typeOfGame}.`

        }
        else if (typeOfGame == 'WaterBalloonFights'){

            checError (this.listOfParticipants, participant1, participant2)

            if (this.priceForTheCamp[found1.condition] != this.priceForTheCamp[found2.condition]) {

                throw new Error(`Choose players with equal condition.`);


            }

            let winnerName = '';
            if(found1.power > found2.power){

                winnerName = participant1;
                found1.wins++;
                
            }
            else if (found1.power < found2.power) {
                winnerName = participant2;
                found2.wins++;
            }
            else {

                return `There is no winner.`;

            }

            return   `The ${winnerName} is winner in the game ${typeOfGame}.`




        }

        function checError (listOfParticipants, participant1, participant2){

            let error = false;
            if(!listOfParticipants.some(p=> p.name == participant1)){

                error = true;
            }
            if(participant2 && !listOfParticipants.some(p => p.name == participant2)){

                error = true;

            }

            if(error){

                let nameOrNames = participant2 == undefined ? 'name' : 'names';
                throw new Error( `Invalid entered ${nameOrNames}.`);
            }

        }
      

        


    }

    toString () {

        let result = [];

        result.push (`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        this.listOfParticipants.sort((a, b) => b.wins - a.wins).map(p => result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));

        return result.join('\n').trim();
    }

}


const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());


