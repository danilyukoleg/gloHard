"use strict";

const strOperation = (str) => {
  if (typeof str !== "string") {
    alert("Передана не строка");
    return;
  }

  if (str.length > 30) {
    str += "...";
  }

  return str.trim();
};

console.log(strOperation("123456789123456789123456789123456789"));
