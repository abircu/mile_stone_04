const student = {
  name: "skib khan",
  id: 2025402006,
  adress: "khilkhet nikunja 02",
  isSingle: true,
  friends: ["opu", "topu", "dipu", "shifu"],
  movie: [{ dalywod: "tukai", holywod: "spiderman", bolywod: "terenam" }],
  car: {
    brand: "toyta",
    price: 500000,
    model: 2023,
    manufacturer: {
      name: "toyta",
      ceo: "roton tata",
      country: "india",
    },
  },
};
console.log(student.car.manufacturer);
