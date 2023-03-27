function attachEventsListeners() {

// get input elements from DOM

    let inputDaysElement = document.querySelector('#days');
    let inputHoursElement = document.querySelector('#hours');
    let inputMinutesElement = document.querySelector('#minutes');
    let inputSecondsElement = document.querySelector('#seconds');


// get all buttonst

    let daysButton = document.querySelector('#daysBtn');
    let hoursButton = document.querySelector('#hoursBtn');
    let minutesButton = document.querySelector('#minutesBtn');
    let secondsButton = document.querySelector('#secondsBtn');


    let ration  = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,


    }

    function convertTime(value, unit ){

        let days = value / ration[unit];
        console.log(days);

        return {

            days: days,
            hours: days * 24,
            minutes: days * 24 * 60,
            seconds: days * 24 * 60 * 60


        }

    }

    let convert = function (e) {

        let curInput = e.target.parentElement.querySelector('input[type = "text"]');

        let time = convertTime(curInput.value, curInput.id );
     
        inputDaysElement.value = time.days;
        inputHoursElement.value = time.hours;
        inputMinutesElement.value = time.minutes;
        inputSecondsElement.value = time.seconds;
    }



    daysButton.addEventListener ('click', convert)
    hoursButton.addEventListener ('click', convert)
    minutesButton.addEventListener ('click', convert)
    secondsButton.addEventListener ('click', convert)




    // // add eventistener to daysBtn

    // daysButton.addEventListener ('click', function(){

    //     let numDays = Number( inputDaysElement.value);

    //     inputHoursElement.value = numDays * 24;
    //     inputMinutesElement.value = inputHoursElement.value * 60;
    //     inputSecondsElement.value = inputMinutesElement.value * 60;
        
    // });

    // hoursButton.addEventListener('click', function() {

    //     let numHours = Number(inputHoursElement.value);

    //     inputDaysElement.value = numHours / 24;
    //     inputMinutesElement.value = numHours * 60;
    //     inputSecondsElement.value = inputMinutesElement.value * 60;


    // });

    // minutesButton.addEventListener('click', function() {

    //     let numMinutes = Number(inputMinutesElement.value);

    //     inputDaysElement.value = numMinutes / 60 / 24;
    //     inputHoursElement.value = inputDaysElement.value * 24;
    //     inputSecondsElement.value = numMinutes * 60;

    // });

    // secondsButton.addEventListener('click', function () {
    //     let numSeconds = Number( inputSecondsElement.value);

    //     inputMinutesElement.value = numSeconds / 60;
    //     inputHoursElement.value = inputMinutesElement.value / 60;
    //     inputDaysElement.value = inputHoursElement.value / 24;



    // });
 


}