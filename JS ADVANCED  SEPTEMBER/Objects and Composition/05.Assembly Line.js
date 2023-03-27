
function createAssemblyLine(){

let libraryDecFuncs = {};

libraryDecFuncs.hasClima  = (car) => {

    car.temp = 21;
    car.tempSettings = 21;
    car.adjustTemp = function (){

        if(car.temp < car.tempSettings){

            car.temp++;
        }
        if(car.temp > car.tempSettings){

            car.temp--;
        }
    }


}

libraryDecFuncs.hasAudio = function(car){

    car.currentTrack = null;
    car.nowPlaying = function(){
        if(car.currentTrack.name != null){
            console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);

        }
    }  
}

libraryDecFuncs.hasParktronic = (car) =>{

    car.checkDistance = (distance) => {
        if(distance < 0.1){
            console.log("Beep! Beep! Beep!");
        }
        else if(distance >= 0.1 && distance <0.25){
            console.log("Beep! Beep!");
        }
        else if(distance >= 0.25 && distance < 0.5){
            console.log("Beep!");


        }
        else{
            console.log('');
        }
    }

} 
return libraryDecFuncs;


}


const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);