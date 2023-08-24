const numbers = [10, 20, 30, 40, 50];
const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isClean: true,
};
for (const num of numbers) {
  console.log(num);
}
for (const key in glass) {
  const value = glass[key];
  console.log(key, value);
}
