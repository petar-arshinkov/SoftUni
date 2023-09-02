function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let numberOfFishermen = Number(input[2]);
    let rent = 0;

    switch (season) {
        case "Spring":
            rent = 3000;

            if (numberOfFishermen % 2 === 0 && season !== "Autumn") {
                rent = rent - (5 / 100 * rent);
            }

            if (numberOfFishermen <= 6) {
                rent = rent - (10 / 100 * rent);
            }

            else if (numberOfFishermen <= 11) {
                rent = rent - (15 / 100 * rent);
            }

            else {
                rent = rent - (25 / 100 * rent);

            }

            if (budget >= rent) {
                let moneyLeft = budget - rent ;
                console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
            }
            else {
                let moneyNeeded = rent - budget;
                console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
            }
            break;
        case "Summer":
        case "Autumn":
            rent = 4200;

            if (numberOfFishermen % 2 === 0 && season !== "Autumn") {
                rent = rent - (5 / 100 * rent);
            }

            if (numberOfFishermen <= 6) {
                rent = rent - (10 / 100 * rent);
            }

            else if (numberOfFishermen <= 11) {
                rent = rent - (15 / 100 * rent);
            }

            else {
                rent = rent - (25 / 100 * rent);

            }

            if (budget >= rent) {
                let moneyLeft = budget - rent ;
                console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
            }
            else {
                let moneyNeeded = rent - budget;
                console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
            }
            break;
        case "Winter":

            rent = 2600;

            if (numberOfFishermen % 2 === 0 && season !== "Autumn") {
                rent = rent - (5 / 100 * rent);
            }

            if (numberOfFishermen <= 6) {
                rent = rent - (10 / 100 * rent);
            }

            else if (numberOfFishermen <= 11) {
                rent = rent - (15 / 100 * rent);
            }

            else {
                rent = rent - (25 / 100 * rent);

            }

            if (budget >= rent) {
                let moneyLeft = budget - rent ;
                console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
            }
            else {
                let moneyNeeded = rent - budget;
                console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
            }
            break;
        default:
            console.log("error");
            break;
    }
}

fishingBoat(["2000", "Spring", "14"])

fishingBoat(["3000",

    "Summer",

    "11"])

fishingBoat(["3600",

    "Autumn",

    "6"])

fishingBoat(["2000", "Winter", "13"])

fishingBoat(["2000", "Winter", "14"])