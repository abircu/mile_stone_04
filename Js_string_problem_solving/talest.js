function maxInArray(number) {
  let largest = number[0];
  for (let i = 0; i < number.length; i++) {
    const index = i;
    const element = number[index];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}
const heights = [167, 172, 190, 120, 163, 137];
const tallest = maxInArray(heights);
console.log("tallest person is", tallest);
