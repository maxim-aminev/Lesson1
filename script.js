"use strict";

let userFirstName = "Максим";
let userLastName = "Аминев";

let userBirthDay = prompt("Введите день вашего рождения:", "");
let userBirthMonth = prompt("Введите месяц вашего рождения:", "");
let userBirthYear = prompt("Введите год вашего рождения:", "");

let userAge = 2021 - userBirthYear;

alert(userLastName + " " + userFirstName + " " + userBirthDay + "." + userBirthMonth + "." + userBirthYear + " " + "Возраст: " + userAge);