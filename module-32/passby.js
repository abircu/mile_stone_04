let num1 = 5;
let num2 = 6;

// object and array are pass by refference
function multiPlay(a, b) {
  const result = a * b;
  return result;
}
const outPut = multiPlay(num1, num2);
console.log(outPut);

let lovebird1 = { name: "sohel", partner: "shifa" };
let lovebird2 = { name: "jankaer mahbub", partner: "ritu" };

function makeMovie(couple1, couple2) {
  couple1.name = "abir hasan";
  console.log(lovebird1, lovebird2);
}
// console.log(lovebird1, lovebird2);
makeMovie(lovebird1, lovebird2);
