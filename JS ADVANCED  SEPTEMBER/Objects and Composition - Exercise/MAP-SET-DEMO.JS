// object MAP => STORE DATA IN A CERTAIN ORDER / MAP STORES KEY VALUE PAIRS
const map = new Map(); 

map.set('Boris', '03351134463');
map.set('Suzi', '07665347');

console.log(map.size);

map.set('Suzi', '+359');
console.log(map.get('Suzi'));

map.delete('Boris');

console.log(map);

map.clear();

console.log(map.size);

console.log(typeof map);

// object SET  stores unique elements

const set = new Set();

set.add(12);
set.add(16);

set.add(12)

console.log(set.size);

set.delete(12);

console.log(set.size);