var test = [
  10, 20, 30, 12, 21, 32, 13, 31, 23, 45, 52, 15, 54, 48, 57, 485, 75, 48, 46,
  49,
];
for (var i = 0; i < test.length; i++) {
  var number = test[i];
  if (number > 50) {
    continue;
  }
  console.log(number);
}
