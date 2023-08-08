function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please inter a valid number";
  } else {
    const cube = number * number * number;
    return cube;
  }
}
// problem number 2

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "your input is in valid";
  }
  const matchingString = string1.includes(string2);
  return matchingString;
}

// problem number 3

function sortMaker(arr) {
  let positive = 0;
  let negative = 0;
  let equal = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      equal++;
    }
  }
  if (positive === 2) {
    return arr.slice().sort((a, b) => b - a);
  } else if (equal == arr.length) {
    return "equal";
  } else {
    return "invalid";
  }
}
const num1 = [1, 1];
console.log(sortMaker(num1));
