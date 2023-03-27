function CircleArea(input){

    let type = typeof(input);

    
     if(type === 'number'){

        let area = Math.PI * Math.pow(input, 2);
        console.log(area.toFixed(2));

    } else{
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }

}

// CircleArea('Circle');
// // CircleArea(5);