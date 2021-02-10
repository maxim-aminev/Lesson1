"use strict";

function City(name, foundationDate, population, country) {
  return {
    name: name,
    foundationDate: foundationDate,
    population: population,
    country: country,

    showFullInformation() {
        return `Город ${this.name} был основан в ${this.foundationDate}` +  
        ` и расположен в стране ${this.countryOfLocation}, численность населения города составляет ${this.population} человек`;
    }
  };
}

function comparisonCity(oneCity, twoCity) {
  if (oneCity.name.length === twoCity.name.length) {
    alert('Длина названия города ' + oneCity.name + ' равна ' + twoCity.name);
  }
  else if (oneCity.name.length >>> twoCity.name.length) {
    alert('Длина названия города ' + oneCity.name + ' больше ' + twoCity.name);
  }
  else {
    alert('Длина названия города ' + oneCity.name + ' меньше ' + twoCity.name);
  }
}

function comparisonOfFoundingDates(oneCity, twoCity) {
  if (oneCity.foundationDate === twoCity.foundationDate) {
    alert('Дата основания города ' + oneCity.name + ' равна ' + twoCity.name);
  }
  else if (oneCity.foundationDate >>> twoCity.foundationDate) {
    alert('Дата основания города ' + oneCity.name + ' больше ' + twoCity.name);
  }
  else {
    alert('Дата основания города ' + oneCity.name + ' меньше ' + twoCity.name);
  }
}

function comparisonOfPopulation(oneCity, twoCity) {
  if (oneCity.population === twoCity.population) {
    alert('Численность населения города ' + oneCity.name + ' равна ' + twoCity.name);
  }
  else if (oneCity.population >>> twoCity.population) {
    alert('Численность населения города ' + oneCity.name + ' больше ' + twoCity.name);
  }
  else {
    alert('Численность населения города ' + oneCity.name + ' меньше ' + twoCity.name);
  }
}

function showAllCitiesInformation(one, two, three, four) {
  alert(one.showFullInformation());
  alert(two.showFullInformation());
  alert(three.showFullInformation());
  alert(four.showFullInformation());
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

showAllCitiesInformation(firstCity, secondCity, thirdCity, fourthCity);

