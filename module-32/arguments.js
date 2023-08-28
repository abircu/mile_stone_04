function sum(a, b, c) {
  for (let num of arguments) {
    console.log(num);
  }
  const arg = [...arguments];
  console.log(arg);
  //   arguments is a object its array like object but not array ..its a object
  const result = a + b + c;
  return result;
}
const total = sum(4, 5, 10, 11, 12, 14, 47);
console.log(total);
