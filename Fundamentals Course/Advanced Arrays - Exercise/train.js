function train(input) {
    let wagons = input[0].split(' ').map(Number);
    let capacity = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        let current = input[i].split(' ');

        if (current[0] === 'Add') {
            wagons.push(Number(current[1]));
        }
        else {
            let passangers = Number(current[0])
            for (let j = 0; j < wagons.length; j++) {
                if (capacity >= passangers + wagons[j] ) {
                    wagons[j] += passangers;
                    break;
                }
            }
        }

    }

    console.log(wagons.join(" "))

}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])