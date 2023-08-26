// 8 ways to get undefine
/*
1.variable that is not initialized will give undefine
2.function with no return
3.perametter that is not passed it will give undefine
4.if return has nothing on the right side will return undefined
5.property that doesnt exists on an object will give you undefined
*/
let first;
// console.log(first);
function second(a, b) {
  const total = a + b;
}
const result = second();
// console.log(result);

function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}

const sum = noNegative(2, -5);
// console.log(sum);

const fifth = { id: 2, name: "ponchom", age: 40 };
console.log(fifth.age, fifth.salary);

const sixth = [10, 20, 30, 40, 50, 60, 70];
// for remove element should not use directly delete use splice.
delete sixth[1];
console.log(sixth[0], sixth[1], sixth[4]);
