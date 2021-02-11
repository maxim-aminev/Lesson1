"use strict";

let order = {
  name: "Pringles",
  description: "chips",
  price: 120,
  currency: "RU",
  manufacturersFirm: "Kelloggs",
  dateOfManufacture: "11.02.2021"
};

let unfilledOrder = {
  description: "Cheetos",
  manufacturersFirm: "Frito-Lay",
  dateOfManufacture: "10.02.2021"
};

function showInfo(object) {

  console.log(object);

  validate();

  let {
    name = "-",
    description = "-",
    price = 0,
    currency = "RU",
    manufacturersFirm = "-",
    dateOfManufacture = "xx.xx.xxxx"
  } = object;

  console.log("Информация о заказе:\n"
    + "Наименование: " + name + "\n"
    + "Описание: " + description + "\n"
    + "Стоимость: " + price + "\n"
    + "Валюта: " + currency + "\n"
    + "Фирма производителя: " + manufacturersFirm + "\n"
    + "Дата изготовления: " + dateOfManufacture + "\n");

    function validate() {
      if (typeof(object.price) !== "number" || object.price < 0) {
        throw "Стоимость не является числом или отрицательна!";
      }
      for (let key in object) {
        if (!object[key]) {
          throw "Встречено пустое поле!";
        }
      }
    }
}

try {
  showInfo(order);
} catch (error) {
  console.warn(error);
}