function townPopulation(input) {
    const result = {};

    for (const line of input) {

        const tokens = line.split(" <-> ");
        const name = tokens[0];
        const population = Number(tokens[1]);

        if (result.hasOwnProperty(name)) {
            result[name] += population;
        }
        else {
            result[name] = population;
        }
    }
    for (const name in result) {
        console.log(name, ":", result[name]);
    }
}


townPopulation(['Sofia <-> 1200000',

    'Montana <-> 20000',

    'New York <-> 10000000',

    'Washington <-> 2345000',

    'Las Vegas <-> 1000000'])
