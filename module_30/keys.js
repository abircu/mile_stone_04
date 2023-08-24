const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isClean: true,
};
const keys = Object.keys(glass);
const values = Object.values(glass);
// const { isClean, ...shortGlass } = glass;
Object.seal(glass);
glass.source = "Bangladesh";
delete glass.color;
console.log(glass);
