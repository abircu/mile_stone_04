function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please inter a valid number";
  } else {
    const cube = number * number * number;
    return cube;
  }
}

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "your input is in valid";
  }
  const matchingString = string1.includes(string2);
  return matchingString;
}
console.log(matchFinder("sohel", false));
