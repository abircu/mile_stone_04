const numbers = [4, 5, 2, 8, 10];
// const doubled = [];
// for (const num of numbers) {
//   const duble = num * 2;
//   doubled.push(duble);
// }
// console.log(...doubled);

/*
map==> loops through each element of the array 
and do the operation that you passed in the call
 back function and hold the result from each 
 operation in an array and finally returns you the array
 */
const result = numbers.map((n) => n * 2);
console.log(...result);
