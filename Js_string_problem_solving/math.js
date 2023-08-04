const result = Math.pow(2, 3);
console.log("result of 2power 3:", result);

const num1 = 25;
const num2 = 45;
const number = 2.623;
const fullnumber = Math.round(number);
const result1 = Math.ceil(number);
const result2 = Math.floor(number);
const gap = Math.abs(num1 - num2);
//  random
const random = Math.round(Math.random() * 6);
console.log(random);
console.log(result1);
console.log(result2);
console.log(fullnumber);
console.log(gap);
if (gap < 5) {
  console.log("you guys can be friends");
} else {
  console.log("you canot be a friends");
}
