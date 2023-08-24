const max = Math.max(6, 12, 41, 56, 5);
console.log(max);

// use three dot ...
const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
const arrayMax = Math.max(...numbers);
console.log(arrayMax);

// user spread operator to copy
const nums = [4, 5, 87, 9];
const nums2 = [...nums];
nums.push(100);
console.log(...nums);
console.log(...nums2);
// advanced
const sonkha = [...nums, 9999];
console.log(...sonkha);
const number = parseFloat(sonkha);
console.log(typeof number);
