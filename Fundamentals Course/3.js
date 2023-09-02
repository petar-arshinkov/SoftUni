function solve(input) {

    let people = {}

    for (const line of input) {
        if (line === "Results") {
            break;
        }

        let [command, ...tokens] = line.split(":");

        switch (command) {
            case "Add":
                let personName = tokens[0];
                let health = +tokens[1];
                let energy = +tokens[2];

                if (people.hasOwnProperty(personName)) {
                    people[personName].health += health;
                } else {

                    people[personName] = {
                        personName: personName,
                        health: health,
                        energy: energy
                    }
                }
                break;
            case "Attack":
                let attackerName = tokens[0];
                let defenderName = tokens[1];
                let damage = +tokens[2];

                if (people.hasOwnProperty(attackerName) && people.hasOwnProperty(defenderName)) {
                    people[defenderName].health -= damage;
                    people[attackerName].energy -= 1

                    if (people[defenderName].health <= 0) {
                        delete people[defenderName];
                        console.log(`${defenderName} was disqualified!`);
                    }

                    if (people[attackerName].energy <= 0) {
                        delete people[attackerName];
                        console.log(`${attackerName} was disqualified!`);
                    }
                }
                break;

            case "Delete":
                let nameToDelete = tokens[0];
                if (people.hasOwnProperty(nameToDelete)) {
                    delete people[nameToDelete];
                } else if (nameToDelete === "All") {
                    people = {};
                }
                break;
            default:
                break;
        }
    }
    let keys = Object.keys(people);
    let length = keys.length;

    console.log(`People count: ${length}`);
    for (const key in keys) {
        console.log(`${keys[+key]} - ${people[keys[+key]].health} - ${people[keys[+key]].energy}`);
    }
}


solve(["Add:Mark:1000:5",
    "Add:Clark:1000:2",
    "Attack:Clark:Mark:500",
    "Attack:Clark:Mark:800",
    "Add:Charlie:4000:10",
    "Results"])
