"use strict";

let arr = ["123", "20", "50", "49", "3000", "4000", "577889"];

for (let elem of arr) {
  if (elem[0] == 2 || elem[0] == 4) {
    console.log(elem);
  }
}
let n = 100;

nextPrime: for (let i = 1; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  console.log(`Делители этого числа: 1 и ${i}`);
}
