const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = { id: 121, class: 11, name: "agun" };
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
function add(num1, num2) {
  return num1 + num2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends));
console.log(typeof add);
console.log(friends.includes(19));
console.log(friends.includes(21));
if (friends.indexOf(254) !== -1) {
  console.log("hlw");
}
// concate: it using for joint and other operation

const newFriendAge = [10, 210, 2, 2, 5458, 14, 2187, 287, 528, 52, 5];
const mergeArray = friends.concat(newFriendAge);
console.log(mergeArray);
