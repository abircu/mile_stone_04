const a = 5;
const b = "kdkdk";
const student = { id: 32, class: 7 };
const ages = [10, 12, 13, 25, 23];

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);
let p = { job: "web devoloper" };
let q = p;
// non primitive partially change
q.job = "front end developer";
console.log(p, q);
