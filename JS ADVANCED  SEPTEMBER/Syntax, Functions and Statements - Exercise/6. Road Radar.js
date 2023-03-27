function demo (speed, area){

    let maxSpeed = 0;
    switch (area) {
        case 'motorway':
            maxSpeed = 130;
            break;
        case 'interstate':
            maxSpeed = 90;
            break;
        case 'city':
            maxSpeed = 50;
            break;
        case 'residential':
            maxSpeed = 20;
            break;
        default:
            break;
    }

        if (maxSpeed >= speed){
            console.log(`Driving ${speed} km/h in a ${maxSpeed} zone`);
        } else{
            let diffrence = speed - maxSpeed;
            let status = '';
            if(diffrence > 40){
                status = 'reckless driving';
            } else if(diffrence > 20){
                status = 'excessive speeding';
            } else{
                status = 'speeding';
            }

            console.log(`The speed is ${diffrence} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
        }
    
}
demo(200, 'motorway');