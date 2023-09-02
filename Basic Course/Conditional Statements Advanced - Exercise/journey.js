function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let budgetSpent = 0;
    let type;

    if (budget <= 100) {
        let destination = "Bulgaria";
        switch (season) {
            case "summer":
                budgetSpent = (30 / 100) * budget;
                type = "Camp";
                console.log(`Somewhere in ${destination}`);
                console.log(`${type} - ${budgetSpent.toFixed(2)}`);
                break;
            case "winter":
                budgetSpent = (70 / 100) * budget;
                type = "Hotel";
                console.log(`Somewhere in ${destination}`);
                console.log(`${type} - ${budgetSpent.toFixed(2)}`);
                break;
            default:
                console.log("error");
                break;

        }
    }
    else if (budget <= 1000) {
        let destination = "Balkans";
        switch (season) {
            case "summer":
                budgetSpent = (40 / 100) * budget;
                type = "Camp";
                console.log(`Somewhere in ${destination}`);
                console.log(`${type} - ${budgetSpent.toFixed(2)}`);
                break;
            case "winter":
                budgetSpent = (80 / 100) * budget;
                type = "Hotel";
                console.log(`Somewhere in ${destination}`);
                console.log(`${type} - ${budgetSpent.toFixed(2)}`);
                break;
            default:
                console.log("error");
                break;
        }
    }

    else {
        let destination = "Europe";
        budgetSpent = (90 / 100) * budget;
        type = "Hotel";
        console.log(`Somewhere in ${destination}`);
        console.log(`${type} - ${budgetSpent.toFixed(2)}`);


    }

}

journey(["50", "summer"]);
journey(["75", "winter"])
journey(["312", "summer"])
journey(["678.53", "winter"])
journey(["1500", "summer"])