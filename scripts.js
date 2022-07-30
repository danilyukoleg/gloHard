"use strict";

let num = 266219;
let sum = 1;

for (let i = 0; i <= 5; i++) {
  let str = String(num);
  sum *= +str[i];
}

sum **= 3;

console.log(String(sum).slice(0, 2));

