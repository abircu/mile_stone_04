const names = [
  "abul",
  "babul",
  "cabul",
  "dabul",
  "ebul",
  "babul",
  "abul",
  "kabul",
  "gabul",
  "babul",
  "abul",
  "abul",
];

function removeDuplicate(name) {
  const uniqe = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (uniqe.includes(name) === false) {
      uniqe.push(name);
    }
  }
  return uniqe;
}
const uniqeName = removeDuplicate(names);
console.log(uniqeName);
