"use strict";

function BuildTable(table) {
    table.innerHTML = "";
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
}

function BuildGetTable(table) {
    let gettd = document.createElement('td');
    gettd.id = "gettd";
    for (let key in orderList[0]) {
        let tr = document.createElement('tr');
        tr.style.height = '30px';
        let input = document.createElement('input');
        input.id = key;
        if (key == 'cost' || key == 'size' || key == 'weight') {
            input.type = "number";
        }
        else {
            input.type = "text";
        }
        tr.append(input);
        gettd.append(tr);
    }
    let tr = document.createElement('tr');
    let buttonget = document.createElement('button');
    buttonget.textContent = "Добавить";
    buttonget.addEventListener("click", function buttonClick() {
        let td = document.getElementById('gettd');
        let inputs = td.getElementsByTagName('input');
        let data = {};

        for(let index = 0; index < inputs.length; index++) {
            if (inputs[index].value === "") {
                data[inputs[index].id] = "-";
            }
            else {
                data[inputs[index].id] = inputs[index].value;
            }
        }
        orderList.push(data);
        gettd.remove();
        BuildTable(table);
        BuildGetTable(table);
        buttonget.removeEventListener("click", buttonClick);
    });
    tr.append(buttonget);
    gettd.append(tr);
    table.append(gettd);
}

function countObj(obj) {
    var length = 0;
    for (var key in obj) {
        length++;
    }

    return length;
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
BuildGetTable(table);
container.append(table);
let lengthCountObj = countObj(orderList[0]);