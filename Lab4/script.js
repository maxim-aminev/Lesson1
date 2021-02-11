"use strict";

function BuildTable(table) {
    table.innerHTML = "";
    for (let index = 0; index < orderList.length; index++) {
        let td = document.createElement('td');
        td.id = index + 1;
        td.addEventListener("click", e => {
            console.warn("Идентификатор столбца на который нажали: " + td.id);
            e.stopPropagation();
        });
        for (let key in orderList[index]) {
            let tr = document.createElement('tr');
            tr.addEventListener("click", () => {
                alert("Всплытие события");
            });
            tr.id = key;
            tr.style.height = '30px';
            tr.textContent = orderList[index][key] + " ";
            td.append(tr);
        }
        table.append(td);
    }
}

let orderList = [
    {name:"Pringles", description:"Chips", cost:120, currency:"RU", size:0, weight:200, manufacturersFirm:"Kelloggs", dateOfManufacture:"11.02.2021"}, 
    {name:"Cheetos", description:"Chips", cost:50, currency:"RU", size:0, weight:100, manufacturersFirm:"Frito-Lay", dateOfManufacture:"11.02.2021"},
    {name:"Lays", description:"Chips", cost:60, currency:"RU", size:0, weight:100, manufacturersFirm:"Frito-Lay", dateOfManufacture:"11.02.2021"}
];

let container = document.getElementById('orderContainer');
let table = document.createElement('table');
BuildTable(table);
container.append(table);