let phoneBook = {

    Pesho: '086515746',
    'Boris Avrmov': '085040560',
    Gabi: '0873214444',

}
console.log(phoneBook); 

// Accesssing and assigning

phoneBook['Pesho'] = '1235';
console.log(phoneBook['Pesho']);


// Iteration - For In

for (const key in phoneBook) {
    
    console.log(`${key} - ${phoneBook[key]}`);

}

//Iteration - Methods

let names = Object.keys(phoneBook);
console.log(names);

let numbers = Object.values(phoneBook);
console.log(numbers);


Object.keys(phoneBook).forEach(k => {

    console.log(`${k} - ${phoneBook[k]}`);


});

Object.values(phoneBook).forEach(v => {

    console.log(v);



});

// KVP => ENTRIES

let entries = Object.entries(phoneBook);

console.log(entries);
 
entries.forEach(kvp =>{

    console.log(`${kvp[0]} - ${kvp[1]}`);
})

// For of

for (const [key, value] of entries) {
    
    console.log(key);

}

