// function cubeNumber(number) {
//   if (typeof number !== "number") {
//     return "Please inter a valid number";
//   } else {
//     const cube = number * number * number;
//     return cube;
//   }
// }
// problem number 2

// function matchFinder(string1, string2) {
//   if (typeof string1 !== "string" || typeof string2 !== "string") {
//     return "your input is in valid";
//   }
//   const matchingString = string1.includes(string2);
//   return matchingString;
// }

// problem number 3

// function sortMaker(arr) {
//   if (arr[0] === arr[1]) {
//     return "equal";
//   }
//   let positive = 0;
//   let negative = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       positive++;
//     } else if (arr[i] < 0) {
//       negative++;
//     }
//   }
//   if (positive === 2) {
//     return arr.slice().sort((a, b) => b - a);
//   } else {
//     return "Invalid input";
//   }
// }

// problem numbr 04

// function findAddress(obj) {
//   const properties = ["street", "house", "socity"];
//   const result = [];
//   for (const property of properties) {
//     if (obj.hasOwnProperty(property)) {
//       result.push(obj[property]);
//     } else {
//       result.push("__");
//     }
//   }
//   return result.toString();
// }

// problem number 05.
function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "please insert the element of array";
  }
  let sum = 0;

  for (let i = 0; i < changeArray.length; i++) {
    sum += changeArray[i];
  }

  return sum >= totalDue;
}

const exampleArray = [];
const exampleNumber = 15;

console.log(canPay(exampleArray, exampleNumber));
