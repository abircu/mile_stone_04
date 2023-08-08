function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please inter a valid number";
  } else {
    const cube = number * number * number;
    return cube;
  }
}
