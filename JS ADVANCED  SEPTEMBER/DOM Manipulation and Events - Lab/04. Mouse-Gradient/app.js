function attachGradientEvents() {
    
    let gradientElement = document.getElementById('gradient');
let resultElement = document.getElementById('result');

    const PercentageHadler = (e) => {

        
        let percentage = Math.floor( (e.offsetX / e.target.clientWidth  ) * 100 );

        resultElement.textContent = percentage + '%';

    }
    const gradientMouseOut = (e) => {

        resultElement.textContent = '';



    }

    gradientElement.addEventListener('mousemove', PercentageHadler);
    gradientElement.addEventListener('mouseout', gradientMouseOut)



}