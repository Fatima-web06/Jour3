function findHousing(housingToFind, housingList) {
    housingToFind = housingToFind.toLowerCase();
    let i = 0;
    while (i < housingList.length) {
        if (housingList[i].toLowerCase() === housingToFind) {
            return [i + 1, housingList[i]];
        }
        i++;
    }
    return null;
}
 
console.log("I'm debugging")
