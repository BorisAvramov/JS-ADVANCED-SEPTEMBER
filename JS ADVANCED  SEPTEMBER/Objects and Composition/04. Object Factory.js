function factory(library, orders){

    let products = [];

    //1st

    for (const order of orders) {
        
        let curOrder = order.template;

        for (const part of order.parts) {
            
            curOrder[part] = library[part];

        }

        products.push(curOrder);

    }



    //2nd
    // for (let index = 0; index < orders.length; index++) {
        
    //     let curOrder = orders[index].template;

    //     for (let index2 = 0; index2 < orders[index].parts.length; index2++) {
            
    //         let curFunc = orders[index].parts[index2]

    //         curOrder[curFunc] = library[curFunc];
            
    //     }

    //     products.push(curOrder);

    // }


    return products;
}

const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];
  


const products = factory(library,orders );

products.forEach(o => console.log(o));

for (const product of products) {
    
    console.log(product.name);

}

console.log(products);