/*
truthy
1. true
2.any number (+ve,-ve) will be thruthy other then 0
3.any string other than emty string
4.'0'
5.empty object
6.empty array 

falsy
1.false
2.0
3.'' (empty string)
4.undefined
5.null
*/
const x = [];
if (x) {
  console.log("value of x is truthy");
} else {
  console.log("value of x is falsy");
}

// check falsy
const y = Number;
if (!y) {
  console.log("check falsy");
}
// check truthy
if (!!x) {
  console.log("value is truthy");
}
