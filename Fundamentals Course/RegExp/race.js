function race(input) {
    let listOfNames = input.shift().split(", ");
    let objectOfNames = {};

    for (const name of listOfNames) {
        objectOfNames[name] = 0;
    }

    let currentRow = input.shift();
    let lettersPattern = /[A-Za-z]/g;
    let digitPattern = /[0-9]/g;

    while (currentRow !== "end of race") {

        let currentName = currentRow.match(lettersPattern).join("");
        let distance = currentRow.match(digitPattern);
        let currentDistance = 0;
        distance.map(d => currentDistance += Number(d));


        if (objectOfNames.hasOwnProperty(currentName)) {
            objectOfNames[currentName] += currentDistance;
        }
        currentRow= input.shift();
    }

    let sortedNames = Object.entries(objectOfNames).sort((a,b) => b[1] - a[1])

    console.log(`1st place: ${sortedNames[0][0]}`);
    console.log(`2nd place: ${sortedNames[1][0]}`);
    console.log(`3rd place: ${sortedNames[2][0]}`);
}


race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])