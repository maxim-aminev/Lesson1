"use strict";

let a = prompt("Введите число:", "");

let isEven = (x) => {
    return x % 2 === 0;
}

console.log(isEven(Number(a)));
