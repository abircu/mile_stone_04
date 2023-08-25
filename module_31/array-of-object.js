const products = [
  { id: 1, name: "lenevo", price: 65000 },
  { id: 2, name: "dell", price: 40000 },
  { id: 3, name: "hp", price: 45000 },
  { id: 4, name: "mac", price: 150000 },
];
// map
// const names = products.map((product) => product.name);
const names = products.map((p) => p.price);
console.log(names);

// forEach
products.forEach((p) => console.log(p.id));

// fillter
const filter = products.filter((p) => p.price > 50000);
console.log(filter);

// find
const affordAble = products.find((p) => p.price < 50000);
console.log(affordAble);

// reduce
const total = products.reduce((accum, current) => accum + current.price);
console.log(total);
