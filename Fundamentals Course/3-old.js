function zoo(input) {

    let animals = {};
    let areas = {};
    let areasCounted = {};

    for (let line of input) {
        if (line === "EndDay") {
            break;
        }

        let [command, token] = line.split(" ");
        if (command === "Add:") {
            let subTokens = token.split("-");
            let animalName = subTokens[0];
            let needed_food_quantity = Number(subTokens[1]);
            let area = subTokens[2];

            areas[animalName] = area;

            if (!animals.hasOwnProperty(animalName)) {
                animals[animalName] = needed_food_quantity;
            }
            else {
                animals[animalName] += needed_food_quantity;
            }

        }
        else if (command === "Feed:") {
            let subTokens = token.split("-");
            let animalName = subTokens[0];
            let food = Number(subTokens[1]);

            if (animals.hasOwnProperty(animalName)) {
                animals[animalName] -= food;
            }

            if (animals[animalName] <= 0) {
                delete animals[animalName];
                console.log(`${animalName} was successfully fed`);
            }



        }

    }

    console.log("Animals:");

    for (const animal in animals) {

        console.log(` ${animal} -> ${animals[animal]}g`);
    }

    let entries = Object.entries(areas);
    let areasArray = Array.from(areas)

    for (let entry of entries) {
        if ((animals.hasOwnProperty(entry[0]))) {
            animals[entry[0]] = entry[1];
        }
    }


    for (const key in animals) {
        let value = animals[key];

        if (areasCounted[value]) {
            areasCounted[value]++
        }
        else {
            areasCounted[value] = 1;
        }
    }

    for (const key in areasCounted) {
        console.log(`${key}: ${areasCounted[key]}`);
    }

}



zoo((["Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay"])

);