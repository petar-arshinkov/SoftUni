function hairSalon(input) {
    let index = 0;
    let profitGoal = Number(input[index]);
    index++

    let profit = 0;
    let goalReached = false;

    while (input[index] !== "closed") {
        if (profit >= profitGoal) {
            goalReached = true;
            break;
        }

        let service = input[index];
        index++;

        if (service ==="haircut"){
            let subservice = input[index];
            index++
            if (subservice === "mens"){
                profit += 15;
            }
            else if(subservice === "ladies"){
                profit += 20;
            }

            else {
                profit += 10;
            }
        }

        else if (service === "color"){
            let subservice = input[index];
            index++;
            if (subservice === "touch up"){
                profit += 20;
            }
            else if(subservice === "full color"){
                profit += 30;
            }
        }

    }

    if (goalReached) {
        console.log(`You have reached your target for the day!`);
    }
    else {
        console.log(`Target not reached! You need ${profitGoal - profit}lv. more.`)
    }

    console.log(`Earned money: ${profit}lv.`)
}


hairSalon(["300",
    "haircut",
    "ladies",
    "haircut",
    "kids",
    "color",
    "touch up",
    "closed"])


hairSalon(["50",
    "color",
    "full color",
    "haircut",
    "ladies"])
