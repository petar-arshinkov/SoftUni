function plantDiscovery(input) {
    let numberOfPlants = +input.shift();
    let plants = {};


    for (let index = 0; index < numberOfPlants; index++) {
        let [plant, rarity] = input[index].split("<->");
        plants[plant] = {
            name: plant,
            rarity: +rarity,
            rating: [],
            ratingSum: 0,
            average: 0,
            count: 0
        }
    }


    let commandsArray = input.slice(numberOfPlants, input.length + 1)


    for (const line of commandsArray) {
        let [command, token] = line.split(": ");
        let subTokens = token.split(" - ");
        let plant = subTokens[0];

        if (!plants.hasOwnProperty(plant)) {
            console.log("error");
            break;
        }

        if (line === "Exhibition") {
            console.log("Plants for the exhibition:");
            for (const plant in plants) {
                let total = 0;
                let count = 0;
                console.log(`- ${plant}; Rarity: ${plants[plant]["rarity"]}; Rating: ${plants[plant]["average"].toFixed(2)}`);
            }
            break;
        }

        if (command === "Rate") {
            let rating = +subTokens[1]
            plants[plant]["rating"].push(rating);
            plants[plant]["ratingSum"] += rating
            plants[plant]['average'] = plants[plant]["ratingSum"] / plants[plant]["rating"].length;


        }

        if (command === "Update") {
            let newRarity = +subTokens[1];
            plants[plant]["rarity"] = newRarity;
        }

        if (command === "Reset") {
            plant = token;

            plants[plant]['rating'] = [];
            plants[plant]['average'] = 0;
        }

    }

}




plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])


