function addNumbers(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    sum = sum + i;
    // console.log(sum);
  }
  return sum;
}
let myNumber = 8;
const sum = addNumbers(myNumber);
console.log("sum :-", sum);

// factorial code
function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}
const result = factorial(9);
console.log("factorial of nine is:-", result);
