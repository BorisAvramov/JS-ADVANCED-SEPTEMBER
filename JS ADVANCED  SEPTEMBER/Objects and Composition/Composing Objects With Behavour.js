function print(){
    console.log(`${this.name} is printing`);
}
function scan() {
    console.log(`${this.name} is scanning`);
}




let printer = {

    name: 'ACME',
    print,
}

let scanner = {
    name: 'Initech',
    scan,
}

let copier = {
    name: 'ComTron',
    scan,
    print,
}

printer.print();
scanner.scan();

copier.scan();
copier.print();