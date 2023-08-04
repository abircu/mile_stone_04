const bios =
  "hi am sohel rana . i am a full stack web devoloper in viva soft it ltd";
const searchWor = "VIVA";
const searchLower = searchWor.toLowerCase();
const lyrics = bios.toLowerCase();
const doExist = lyrics.includes(searchLower);
console.log(doExist);

// index of

if (lyrics.indexOf("stacka") !== -1) {
  console.log("exit insite the string");
} else {
  console.log("cannot find it");
}

// start with
console.log(lyrics.startsWith("hi"));

// ends with
console.log(lyrics.endsWith("ltd"));
