const numbers = [45, 23, 32, 12, 56, 65, 89];
const num2 = 400;
let sum = 0;
for (const number of numbers) {
  //   console.log(number);
  sum += number;
}
console.log(sum >= num2);
const products = [
  { id: 1, name: "walton phone", price: "10500" },
  { id: 2, name: "itel", price: "11000" },
  { id: 3, name: "symphony phone", price: "13500" },
  { id: 4, name: "samsung tablet", price: "19999" },
  { id: 5, name: "xaomi monitor", price: "15690" },
  { id: 6, name: "infinix phone", price: "14590" },
  { id: 7, name: "maximus tablet", price: "7080" },
  { id: 8, name: "motorola phone", price: "45090" },
];
function matchedProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}
const result = matchedProducts(products, "tablet");
console.log(result);
