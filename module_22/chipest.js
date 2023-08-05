const phones = [
  {
    name: "samsung",
    camera: 12,
    storage: "32gb",
    price: 36000,
    color: "silver",
  },
  { name: "walton", camera: 10, storage: "32gb", price: 6000, color: "blue" },
  {
    name: "xoami",
    camera: 48,
    storage: "128gb",
    price: 41999,
    color: "golden",
  },
  { name: "vivo", camera: 48, storage: "128gb", price: 20000, color: "golden" },
  {
    name: "Nokia",
    camera: 48,
    storage: "128gb",
    price: 34999,
    color: "golden",
  },
  { name: "itel", camera: 48, storage: "128gb", price: 10000, color: "golden" },
  {
    name: "iphone 13 pro max",
    camera: 64,
    storage: "128gb",
    price: 85000,
    color: "silver",
  },
];
function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}
const myselection = cheapestPhone(phones);
console.log(myselection);
