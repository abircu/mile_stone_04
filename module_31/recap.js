/**
 * 1.var let const
 * 2.default paremeter
 * 3.templete string
 * 4.arrow function
 * 5.distructuring  and spread
 * 6.object.keys,object.values,object.entries
 * 7.for of &for each
 * */

const a = 56;
const numbers = [56, 7, 8];
const person = {
  name: "sakib khan",
};
const message = `Hi,${person.name} has a: ${a} access to ${numbers[1]}`;
console.log(message);

const square = (a) => a * a;
const squareResult = square(7);
console.log(squareResult);

const { name, fathersName } = {
  name: "md sohel Rana",
  fathersName: "Abdul aziz",
  MothersName: "Rahima khatun",
  parmanentAdress: "Rangamatia,fulbaria,mymensing bd",
  presentAadress: "nikunja-02,khilkhet,dhaka bangladesh",
};
console.log(name, fathersName);
