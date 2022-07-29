"use strict";

let num = 266219;
let sum = 0;

for (let i = 0; i <= 5; i++) {
  let str = String(num);
  sum = +str[i] * +str[i];
}

let result = 3;
result **= sum;

console.log(result.toPrecision(2));
