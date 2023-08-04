const bios =
  "hi am sohel rana . i am a full stack web devoloper in viva soft it ltd";

const substr = bios.substring(5, 8);
console.log(substr);

// trim
const whiteSpace = bios.trimStart();
console.log(whiteSpace);

// joint
const lyrics =
  "amar sunar bangla. ami tumaye valobasi. chirodin tumar akas tumar vatas amar prane.oma amar prane bajaye basi sunar bangla ami tumaye valobasi";
const word = lyrics.split(".");
const newSong = word.join(":");
console.log(newSong);
