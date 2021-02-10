"use strict";

function City(name, foundationDate, population, country) {
  return {
    name: name,
    foundationDate: foundationDate,
    population: population,
    country: country
  };
}

function sortByPopulation(cites) {
  for(let i = cites.length - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      if (cites[j].population < cites[j+1].population) {
        let temp = cites[j];
        cites[j] = cites[j+1];
        cites[j+1] = temp;
      }
    }
  }
}

let firstCity = new City('Magnitogorsk', 1929, 410733, 'Russia');
let secondCity = new City('Chelyabinsk', 1736, 1150000, 'Russia');

let thirdCity = new City();
for (let key in firstCity) {
  thirdCity[key] = firstCity[key];
};
let fourthCity = Object.assign({}, secondCity);

thirdCity.name = 'Moscow';
thirdCity.foundationDate = 1147;

fourthCity.name = 'Saint-Petersburg';
fourthCity.foundationDate = 1703;

let fifthCity = new City('Ufa', 1574, 1075000, 'Russia');
let sixthCity = new City('Chelyabinsk', 1723, 1387000, 'Russia');

let cites = [firstCity, secondCity, thirdCity, fourthCity, fifthCity, sixthCity];
alert('Перед сортировкой:');
for (let i = 0; i < cites.length; i++) {
  alert(cites[i].name);
};
sortByPopulation(cites);
alert('После сортировки:');
for (let i = 0; i < cites.length; i++) {
  alert(cites[i].name);
};
