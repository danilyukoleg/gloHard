"use strict";
let lang = "en";
let arrRU = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
let arrEN = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
let arrBig = [
  ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
  ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
];

console.log(arrBig[1]);

if (lang === "ru") {
  console.log(arrRU);
} else if (lang === "en") {
  console.log(arrEN);
} else {
  console.log("УПС");
}

switch (lang) {
  case "ru":
    console.log(arrRU);
    break;
  case "en":
    console.log(arrEN);
    break;
  default:
    console.log("УПС");
}

let namePerson = "Артем";

namePerson === "Артем" ? console.log("директор") : console.log("студент");
namePerson === "Александр"
  ? console.log("преподователь")
  : console.log("студент");
