function grandpaStavri(input) {
    let days = Number(input[0]);
    let index = 1;

    let liters = 0;
    let degrees = 0;
    let totalDegrees = 0;
    let totalLitters = 0;




    for (let i = 1; i <= days; i++) {
        liters = Number(input[index]);
        totalLitters += liters;
        index++;
        degrees = Number(input[index]) * liters;
        index++;
        totalDegrees += degrees;
    }

    console.log(`Liter: ${totalLitters.toFixed(2)}`);
    console.log(`Degrees: ${(totalDegrees / totalLitters).toFixed(2)}`);

    if ((totalDegrees / totalLitters) < 38) {
        console.log(`Not good, you should baking!`);
    }

    else if ((totalDegrees / totalLitters) < 42) {
        console.log(`Super!`);
    }

    else {
        console.log(`Dilution with distilled water!`);
    }

}


grandpaStavri(["3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"])
