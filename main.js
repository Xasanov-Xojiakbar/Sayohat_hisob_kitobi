var userName = prompt("Ismingiz nima?");
var mablag = Number(prompt(`Mablag'ingizni kiriting ${userName}`));

//Harajat dollar
var bilet = 500;
var ticket = 250;

//Harajat euro
var museum = 120;

var dollarUsd = 11100.61;
var euroUsd = 12247.79;

var forAll = (bilet + ticket) * dollarUsd + museum * euroUsd;
var forTicket = (bilet + ticket) * dollarUsd;
var forTravel = bilet * dollarUsd;

if (mablag >= forAll) {
  alert("Hech narsani o'ylamasdan ketishingiz mumkin.Oq yo'l sizga !");
} else if (mablag >= forTicket) {
  alert("Muzeyga borish uchun ham mablag' oling");
} else if (mablag >= forTravel) {
  alert("Xar ehtimolga qarshi qo'shimcha mablag' oling");
} else {
  alert(`Mablag'ingiz yetarli emas. Xapa bo'lish yo'q ! Sizga ${forAll - mablag} so'm kerak`);
}

