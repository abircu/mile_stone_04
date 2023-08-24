const actor = {
  name: "ananta",
  age: 30,
  phone: "01301854873",
  money: 1200000,
};
// const Name = actor.money;
// const money = actor.name;
const { phone, money, name, age } = actor;

console.log(`
${money}
${phone}
${age}
`);
// arry distructuring
const numbers = [45, 66];
const [first, second] = numbers;
const [x, y] = [12, 66];
console.log(first, second);
function doubleThem(a, b) {
  return [a * 2, b * 2];
}
const [prothom, ditiyo] = doubleThem(12, 24);
const entries = Object.entries(glass);
console.log(prothom, ditiyo);
