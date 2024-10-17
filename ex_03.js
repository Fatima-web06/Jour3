function fillBus(peopleAtBusStops, busSeats) {
    let peopleInTheBus = 0;
    for (let i = 0; i < peopleAtBusStops.length; i++) {
        peopleInTheBus += peopleAtBusStops[i];
        if (peopleInTheBus >= busSeats) {
            return i + 1;
        }
    }
    return -1;
}
 
console.log(fillBus([1, 3, 10, 1], 12));
 
