"use strict";

let orderList = [
    {name:"Pringles", description:"Chips", cost:120, currency:"RU", size:0, weight:200, manufacturersFirm:"Kelloggs", dateOfManufacture:"11.02.2021"}, 
    {name:"Cheetos", description:"Chips", cost:50, currency:"RU", size:0, weight:100, manufacturersFirm:"Frito-Lay", dateOfManufacture:"11.02.2021"},
    {name:"Lays", description:"Chips", cost:60, currency:"RU", size:0, weight:100, manufacturersFirm:"Frito-Lay", dateOfManufacture:"11.02.2021"}
];

// Деструктуризация массива объектов и одного из объектов
let [product1, product2, product3] = orderList;
let {
    name = "-",
    description = "-",
    cost = 0,
    currency = "RU",
    size = 0,
    weight = 0,
    manufacturersFirm = "-",
    dateOfManufacture = "-"
} = product1;

let container = document.getElementById('orderContainer');
let table = document.createElement('table');
for (let index = 0; index < orderList.length; index++) {
  let td = document.createElement('td');
  for (let key in orderList[index]) {
    let tr = document.createElement('tr');
    if (key === "name") {
      let a = document.createElement('a');
      a.innerHTML = orderList[index][key];
      a.href = "product.html?ID=" + index;
      a.style.color = 'black';
      a.style.textDecoration = 'none';
      tr.append(a);
      td.append(tr);
    }
    else {
      tr.innerHTML = orderList[index][key] + " ";
      td.append(tr);
    }
  }
  table.append(td);
}
container.append(table);