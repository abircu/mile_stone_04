function factorial(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result = result * i;
    // console.log(result);
  }
  return result;
}
const number = 9;
const result = factorial(number);
console.log("factorial of:", number, "is", result);
