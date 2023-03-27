function solve  (arrTickets, criteria){

    class Ticket {
        constructor(destination, price, status){
            this. destination = destination;
            this.price = price;
            this.status = status;
            
        }


    }

let ticketsStore = [];

arrTickets.map(t => {

[destination, price, _status] = t.split('|');

ticketsStore.push(new Ticket (destination, Number(price), _status));


});


return ticketsStore.sort((a, b) => {

    if(criteria == 'price'){
        return a[criteria] - b[criteria];
    }
    else{
        return a[criteria].localeCompare(b[criteria]);
    }



});

}

console.log( solve(
['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],

'destination'
) );