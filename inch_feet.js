function inchToFeet() {
  var inch = 63;
  var feet = inch / 12;
  return feet;
}
var height = inchToFeet();
console.log("your hight is", height, "feet");

// another function

function inchToFeet(inches) {
  const feet = inches / 12;
  return feet.toFixed(2);
}
const dadaInches = 64;
const dadaheight = inchToFeet(dadaInches);
console.log(dadaheight);
