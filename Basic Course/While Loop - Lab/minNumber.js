function minNumber(input) {
    let index = 0;
    let number = 0;
    let smallerNumber = Number(input[0]);

    while (input[index] !== "Stop") {
        number = Number(input[index]);
        if (number < smallerNumber) {
            smallerNumber = number;
        }
        index++;
    }
    console.log(smallerNumber);

}


minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])


minNumber(["-10",
    "20",
    "-30",
    "Stop"])

minNumber(["45",
    "-20",
    "7",
    "99",
    "Stop"])

minNumber(["999",
    "Stop"])

minNumber(["-1",
    "-2",
    "Stop"])
