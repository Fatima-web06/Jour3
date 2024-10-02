let country = [];

function createCity(country, cityName) {
    country.push([cityName, []]);
}

function createHousing(country, cityName, housingName) {
    let city = country.find(city => city[0] === cityName);
    if (city) city[1].push([housingName, []]);
}

function addCharacteristics(country, cityName, housingName, ...characteristics) {
    let city = country.find(city => city[0] === cityName);
    let housing = city ? city[1].find(house => house[0] === housingName) : null;
    if (housing) housing[1].push(...characteristics);
}

function getCharacteristicsOfHousing(country, cityName, housingName) {
    let city = country.find(city => city[0] === cityName);
    let housing = city ? city[1].find(house => house[0] === housingName) : null;
    return housing ? housing[1] : null;
}


createCity(country, "Nantes");
createHousing(country, "Nantes", "Apartment1");
addCharacteristics(country, "Nantes", "Apartment1", "100 m2", "2 bathrooms", "Red paint");

console.log(getCharacteristicsOfHousing(country, "Nantes", "Apartment1"));
console.log(country);
