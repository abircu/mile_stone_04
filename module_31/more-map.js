const numbers = [10, 12, 13, 14, 15, 15, 16, 17, 18, 19];
const minus = numbers.map((num) => num - 2);
console.log(...minus);

const friends = ["tom", "john", "alex", "sobuj"];
const add = friends.map((name) => "Mr" + name);
console.log(...add);
// for finding length
const lengths = friends.map((friend) => friend.length);
console.log(lengths);
// for finding fast latter
const firstLatter = friends.map((fnd) => fnd[0]);
console.log(firstLatter);
