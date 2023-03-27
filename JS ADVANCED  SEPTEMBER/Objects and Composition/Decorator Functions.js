
function canPrint(device){

    device.print = function print(){

        console.log(`${this.name} is printing`);
    }

}


let copier = {

    name: 'ACME'
}

canPrint(copier);

copier.print();