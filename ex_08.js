function houseEnergyScore() {
    const housingList = [
        ["Hutch", 30],
        ["Loft", 345],
        ["Castle", 560],
        ["Igloo", 12],
        ["Villa", 232],
        ["Flat", 212]
    ];
 
    function getEnergyGrade(consumption) {
        if (consumption >= 450) return 'G';
        if (consumption < 450 && consumption >= 330) return 'F';
        if (consumption < 330 && consumption >= 230) return 'E';
        if (consumption < 230 && consumption >= 150) return 'D';
        if (consumption < 150 && consumption >= 90) return 'C';
        if (consumption < 90 && consumption >= 51) return 'B';
        return 'A'; 
    }
		let housingWithGrades = housingList.map(house => {
        let grade = getEnergyGrade(house[1]); 
        return [house[0], house[1], grade]; 
    });
    housingWithGrades.sort((a, b) => a[1] - b[1]);
    return housingWithGrades;
}
  const result = houseEnergyScore();
	console.log(result);




// This lines will display the result for you
if (typeof houseEnergyScore === "function") {
	const scores = [["Hutch", 30],["Loft", 345], ["Castle", 560], ["Igloo", 12], ["Villa", 232], ["Flat", 212]];
	const result = houseEnergyScore();
	displayResult(result);
}
