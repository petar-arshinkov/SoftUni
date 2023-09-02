function searchForANumber(numbers, commands) {
    let numbersToTake = commands[0];
    let numbersToDelete = commands[1];
    let numbersToSearch = commands[2];

    let newArray = numbers.slice(0, numbersToTake);
    newArray.splice(0,numbersToDelete);

    let numberCounter = newArray.filter(e => e === numbersToSearch).length

    console.log(`Number ${numbersToSearch} occurs ${numberCounter} times.`);
}


searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
);