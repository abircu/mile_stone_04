let first = 10;
let second = 12;
// swap using temp method
let temp = first;
first = second;
second = temp;

// swap using distructuring
[first, second] = [second, first];

console.log(first);
console.log(second);
