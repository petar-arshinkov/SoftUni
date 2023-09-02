function picollo(input) {
    let parking = new Set();

    for (const entry of input) {
        let [direction, carNumber] = entry.split(', ');

        if (direction === "IN") {
            parking.add(carNumber);
        }
        else if (direction === "OUT") {
            parking.delete(carNumber);
        }
    }
    if (parking.size === 0) {
        console.log("Parking Lot is Empty");
    }
    else {
        let sorted = Array.from(parking).sort((a, b) => a.localeCompare(b))
        sorted.forEach(element => {
            console.log(element)
        });
    }

}

picollo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])