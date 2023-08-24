const add = (a, b) => a + b;
const sum = add(10, 52);
console.log(sum);
const difference = (x, y) => x - y;
const getAge = (person) => person.age;
const student = { name: "ananta", age: 45 };
const age = getAge(student);
console.log(age);

const getThird = (numbers) => numbers[2];
const third = getThird([5, 10, 88, 2, 13]);
console.log(third);

const getName = (members) => members.name;
const family = { name: "abir", Sarary: 1100 };
const Name = getName(family);
console.log(Name);
