function reverseString(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];
    reversed = reversed;
    console.log(element);
  }
  return reversed;
}

const myString = "I am a webdevoloper";
const reversed = reverseString(myString);
console.log("reverse output", reversed);
