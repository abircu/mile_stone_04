var myMobail = {
  name: "samsung galaxy A2",
  Brand: "samsung",
  price: 7900,
  color: "blue",
  Ram: "4gb",
  Rom: "32gb",
};
var penCount = myMobail["Brand"];
var propartyKey = Object.keys(myMobail);
var propertyValues = Object.values(myMobail);
console.log(myMobail);
myMobail.color = "black";
console.log(myMobail);
console.log(penCount);
console.log(propartyKey);
console.log(propertyValues);
