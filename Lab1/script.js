"use strict";

let orderList = [
    {name:"Pringles", description:"Chips", cost:120, currency:"RU", size:0, weight:200, manufacturersFirm:"Kelloggs", dateOfManufacture:"11.02.2021"}, 
    {name:"Cheetos", description:"Chips", cost:50, currency:"RU", size:0, weight:100, manufacturersFirm:"Frito-Lay", dateOfManufacture:"11.02.2021"},
    {name:"Lays", description:"Chips", cost:60, currency:"RU", size:0, weight:100, manufacturersFirm:"Frito-Lay", dateOfManufacture:"11.02.2021"}
];

let container = document.getElementById('orderContainer');
let table = document.createElement('table');
for (let index = 0; index < orderList.length; index++) {
  let td = document.createElement('td');
  for (let key in orderList[index]) {
    let tr = document.createElement('tr');
    tr.id = key;
    tr.style.height = '30px';
    tr.textContent = orderList[index][key] + " ";
    td.append(tr);
  }
  table.append(td);
}

let lengthCountObj = countObj(orderList[0]);

let buttontd = document.createElement('td');
for (let key in orderList[0]) {
    let tr = document.createElement('tr');
    tr.style.height = '30px';
    let button = document.createElement('button');
    button.textContent = "Удалить";
    button.size = 1;
    button.addEventListener("click", function buttonClick() {
        for (let index = 0; index < orderList.length; index++) {
            let tr = document.getElementById(key);
            tr.remove();
        }   
        button.removeEventListener("click", buttonClick);
        button.remove();
        tr.remove();
    });
    tr.append(button);
    buttontd.append(tr);
}
table.append(buttontd);
container.append(table);

function countObj(obj) {
    var length = 0;
    for (var key in obj) {
        length++;
    }
    return length;
}