var words = ["groundmeat", "controlpanel", "torail", "majorteam", "tomboy"];

const map1 = words.map(x => x.length);
console.log(map1);

const map2 = words.map(x => x.toUpperCase());
console.log(map2);

const map3 = words.map(x => x.split('').reverse().join(''));
console.log(map3);