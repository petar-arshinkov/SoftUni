function vacation(input) {
    let moneyNeeded = Number(input[0]);
    let money = Number(input[1]);
    let index = 0;
    let days = 0;
    let minusDays = 0;
    let moneyEnough = false;

    while (minusDays < 5) {
        if (input[index] === "spend") {
            money -= input[index + 1];
            if (money < 0) {
                money = 0;
            }
            minusDays++
            days++
        }
        else if (input[index] === "save") {
            money += Number(input[index + 1]);
            days++;
            minusDays = 0;
        }


        index++;

        if (money >= moneyNeeded) {
            moneyEnough = true;
            break;
        }

    }

    if (moneyEnough) {
        console.log(`You saved the money for ${days} days.`)
    }

    else {
        console.log("You can't save the money.");
        console.log(`${days}`)
    }
}

vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])

vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])

vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"])
