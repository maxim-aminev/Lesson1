"use strict";

let a = prompt("Введите число:", "");

let getDigitsSum = (x) => {
  let len = x;
  let k = 0;
  let sum = 0;
  x = Number(x);
  
  for (let i = 0; i < len; i++) {
        k = x % 10;
        sum += k;
        x = parseInt(x / 10);
  }

  return result;
}

let sum = getDigitsSum(a);
console.log(sum);