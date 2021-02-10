"use strict";

let a = prompt("Введите строку:", "");

let capitalise = (str) => {
  let b = str.charAt(0).toUpperCase() + str.slice(1);

  return b;
}

let c = capitalise(a);
console.log(c);