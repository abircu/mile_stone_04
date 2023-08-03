function milesToKilometer(miles) {
  const km = miles * 1.609;
  return km.toFixed(1);
}
const rampuraMiles = 23;
const rampuraKm = milesToKilometer(rampuraMiles);
console.log(rampuraKm, "kilometer");
