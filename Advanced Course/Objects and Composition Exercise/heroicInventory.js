function heroicInventory(inputArr) {
    let resultArr = [];

    for (let line of inputArr) {
        let [name, level, items] = line.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : []
        let hero = {
            name: name,
            level: level,
            items: items
        }

        resultArr.push(hero)
    }

    console.log(JSON.stringify(resultArr));
}



heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);