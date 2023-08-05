const shopingCard = [
  { name: "shoe", price: 1200, quantity: 4 },
  { name: "shirt", price: 1900, quantity: 5 },
  { name: "pant", price: 3700, quantity: 2 },
  { name: "belt", price: 600, quantity: 6 },
];
function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const produnct = products[i];
    const productTotal = produnct.price * produnct.quantity;
    sum = sum + productTotal;
    // console.log(produnct);
  }
  return sum;
}
const expence = totalCost(shopingCard);
console.log("Total Amount:", expence);
