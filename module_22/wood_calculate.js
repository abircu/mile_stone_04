function woodCalculator(chairQuintity, tableQuintity, bedQuintity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;
  const chairWood = chairQuintity * perChairWood;
  const tableWood = tableQuintity * perTableWood;
  const bedWood = bedQuintity * perBedWood;
  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}

const chair = 10;
const table = 15;
const bed = 20;

const totalWood = woodCalculator(chair, table, bed);
console.log(totalWood, "cft.");
