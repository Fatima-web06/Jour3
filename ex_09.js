function addHousing(housingMap, houseType, quantity) {
    if (housingMap.has(houseType)) {
    	let currentQuantity = housingMap.get(houseType);
        housingMap.set(houseType, currentQuantity + quantity);
    } else {
        housingMap.set(houseType, quantity);
    }
}



// Here is some code to test and display your function output:
let housingList = new Map ();
addHousing(housingList , "Flat", 2);
addHousing(housingList , "Log", 3);
addHousing(housingList , "Flat", 3);
addHousing(housingList , "Hutch", 2);
displayResult(housingList);

// (you must modify it to test out your code but /!\ do not deliver it /!\ ). Only deliver your function
const result = new Map([["Flat", 0]]);
displayResult(result);


