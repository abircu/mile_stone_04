function getSumOfArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    // console.log(index, element, sum);
  }
  return sum;
}

function getOddNumbersOfAnArray(numbers) {
  const oddNumber = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 !== 0) {
      oddNumber.push(element);
    }
  }
  return oddNumber;
}
const mynumbers = [12, 65, 45, 78, 32, 45, 69];
const oddNumber = getOddNumbersOfAnArray(mynumbers);
const oddNumberSum = getSumOfArray(oddNumber);
console.log(oddNumberSum);
