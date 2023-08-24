const data = [
  {
    id: 1,
    name: "abdul",
    adress: "khilkhet",
  },
  {
    id: 2,
    name: "kallu mama",
    adress: "bilachori",
  },
];
console.log(data[1].name);

const products = {
  count: 5000,
  data: [
    { id: 1, name: "lenevo laptop", price: 65000 },
    { id: 2, name: "macbook", price: 165000 },
  ],
};
console.log(products.data[1].price);

const user = {
  id: 5001,
  name: "Soriful Raj",
  address: {
    street: {
      first: "Raod No-15, house-12, nikunja-02",
      second: "poribag er goli",
    },
    city: "dhaka",
  },
};
const user2 = {
  id: 5002,
  name: "pori bibir majar",
  address: {
    city: "chittagong",
    country: "bangladesh",
  },
};
console.log(user.address.street?.first);
console.log(user2.address.street?.first);
