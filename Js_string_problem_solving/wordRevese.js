// function reveseWords(str) {
//   const words = str.split(" ");
//   const result = [];
//   for (let i = words.length - 1; i >= 0; i--) {
//     const element = words[i];
//     result.push(element);
//   }
//   const reverse = result.join(" ");
//   return reverse;
// }
// const myString = "I am a good Boy";
// reveseWords(myString);
// console.log(reveseWords);

function reveseWords(str) {
  const words = str.split(" ");
  const result = [];
  for (let i = words.length - 1; i >= 0; i--) {
    const element = words[i];
    result.push(element);
  }
  const reverse = result.join(" ");
  return reverse;
}

const myString = "I am a good Boy";
const ulta = reveseWords(myString);
console.log(ulta);
