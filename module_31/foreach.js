// filter means select elements based on conditions and returns an array with the elements that fulfilled the condition

const numbers = [1, 5, 6, 15];
const players = [75, 65, 67, 72, 55, 59, "sohel"];
const selected = players.filter((p) => p < 100);
console.log(selected);
