function santa(input) {
    let days = Number(input[0]);
    let food = Number(input[1]);
    let deerOneFood = Number(input[2]);
    let deerTwoFood = Number(input[3]);
    let deerThreeFood = Number(input[4]);
    let foodRequired = deerOneFood * days + deerTwoFood * days + deerThreeFood * days;

    if (food > foodRequired) {
        console.log(`${Math.floor(food - foodRequired)} kilos of food left.`)
    }
    else {
        console.log(`${Math.ceil(foodRequired - food)} more kilos of food are needed.`)
    }
}

santa(["2",
    "10",
    "1",
    "1",
    "2"])

santa(["5",
    "10",
    "2.1",
    "0.8",
    "11"])

