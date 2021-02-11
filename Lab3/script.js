"use strict";

function BuildTable(table) {
    table.innerHTML = "";
    for (let index = 0; index < orderList.length; index++) {
        let td = document.createElement('td');
        for (let key in orderList[index]) {
            let tr = document.createElement('tr');
            tr.style.height = '30px';
            if (key === "name") {
                tr.id = key;
                let a = document.createElement('a');
                a.innerText = orderList[index][key];
                a.addEventListener("click", function aclick() {
                    let showinfo = document.getElementById("temp");
                    showinfo.innerText = "Название: " + orderList[index].name + "\n" +
                    "Описание: " + orderList[index].description + "\n" +
                    "Стоимость: " + orderList[index].cost + " " + orderList[index].currency + "\n" +
                    "Размер: " + orderList[index].size + "\n" +
                    "Вес: " + orderList[index].weight + "\n" +
                    "Фирма производитель: " + orderList[index].manufacturersFirm + "\n" +
                    "Дата производства: " + orderList[index].dateOfManufacture + "\n";
                });
                a.style.textDecoration = 'none';
                a.style.color = "black";
                tr.append(a);
                td.append(tr);
            }
            else {
                tr.id = key;
                tr.textContent = orderList[index][key] + " ";
                td.append(tr);
            }
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