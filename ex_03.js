function fillBus (peopleAtBusStops, busSeats) { 
	let busCapacity = 0 ;

	for (let i = 0; i < peopleAtBusStops.length; i++) {
        busCapacity += peopleAtBusStops[i];
        
 		if (busCapacity >= busSeats) { 
		return i ;
		}

}

		return -1;

}
