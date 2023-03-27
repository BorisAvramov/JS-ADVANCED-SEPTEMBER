class SmartHike{

constructor(username){

    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;

}

addGoal (peak, altitude){

    if(!this.goals.hasOwnProperty(peak)){

        this.goals[peak] = altitude

        return `You have successfully added a new goal - ${peak}`;
    }

   return `${peak} has already been added to your goals`

}

hike (peak, time, difficultyLevel){

    if(!this.goals[peak]){
            throw new Error(`${peak} is not in your current goals`);
    }

    if (this.resources <= 0){
        throw new Error ("You don't have enough resources to start the hike");
    }

    if (this.resources - time * 10 < 0 ){
        return "You don't have enough resources to complete the hike";
    }

    this.resources -= time * 10;
    this.listOfHikes.push({peak, time, difficultyLevel});
    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
}
rest(time){

    this.resources  = this.resources + time * 10 >= 100 ? 100 : this.resources + time * 10;

    if (this.resources >= 100){
        return `Your resources are fully recharged. Time for hiking!`;
    }
    else{

        return `You have rested for ${time} hours and gained ${time*10}% resources`
    }

}

showRecord (criteria){

    if(this.listOfHikes.length == 0){
        return `${this.username} has not done any hiking yet`

    }
    if(criteria == 'all'){

       let result = `All hiking records:\n`;
        this.listOfHikes.forEach(h => result +=`${this.username} hiked ${h.peak} for ${h.time} hours\n`)
        return result.trim();
    }

    let hikesByCriteria = this.listOfHikes.filter(h => h.difficultyLevel == criteria);

    if(hikesByCriteria.length != 0){
        
        

            let bestHuke = {};
            let minTime = Number.MAX_SAFE_INTEGER;
            hikesByCriteria.map(h => {

                if(h.time < minTime){
                    minTime = h.time;
                    bestHuke = h;
                }

            });

            return `${this.username}'s best ${criteria} hike is ${bestHuke.peak} peak, for ${bestHuke.time} hours`

        


    }
    else{

        return `${this.username} has not done any ${criteria} hiking yet`
    }


}



    
}


const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));







