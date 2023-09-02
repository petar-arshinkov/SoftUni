function santaHoliday(input) {
    let days = Number(input[0]);
    let room = input[1];
    let review = input[2];

    let nights = days - 1;

    let totalPrice = 0;

    switch (room) {
        case "room for one person":
            totalPrice = 18 * nights;
            break;

        case "apartment":
            totalPrice = 25 * nights;
            if (days < 10) {
                totalPrice = totalPrice - (0.30 * totalPrice);
            }

            else if (days <= 15) {
                totalPrice = totalPrice - (0.35 * totalPrice);
            }
            else {
                totalPrice = totalPrice - (0.50 * totalPrice);
            }
            break;

        case "president apartment":
            totalPrice = 35 * nights;
            if (days < 10) {
                totalPrice = totalPrice - (0.10 * totalPrice);
            }

            else if (days <= 15) {
                totalPrice = totalPrice - (0.15 * totalPrice);
            }
            else {
                totalPrice = totalPrice - (0.20 * totalPrice);
            }
            break;
    }

    if (review === "positive") {
        totalPrice += (0.25 * totalPrice);
    }

    else {
        totalPrice -= (0.1 * totalPrice);
    }

    console.log(totalPrice.toFixed(2));

}

santaHoliday(["14",
    "apartment",
    "positive"])

santaHoliday(["30",
    "president apartment",
    "negative"])
