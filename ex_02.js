function findHousing(housingToFind, housingList) {
    let index = 0;
    let lowerCaseHousingToFind = housingToFind.toLowerCase();
    
    while (index < housingList.length) {
        if (housingList[index].toLowerCase() === lowerCaseHousingToFind) {
            return [index + 1, housingList[index]];
        }
        index++;
    }
    
    return null;
}

displayResult(findHousing("Igloo", ["Flat", "House", "Hut", "House", "Igloo"]))
