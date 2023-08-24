const getThird = (numbers) => numbers[2];
const third = getThird([5, 88, 2, 13]);
console.log(third);
const doubleIt = (num) => num * 2;
const getPI = () => Math.PI;
console.log(getPI);

const doMath = (x, y, z) => {
  const sum = x + y + z;
  const mult = x * y * z;
  const result = sum + mult;
  return result;
};
const finalValue = doMath(10, 12, 13);
console.log(finalValue);
