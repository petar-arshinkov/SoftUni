function worldTour(input) {
    let string = input.shift();
    let resultString = string;


    for (let line of input) {
        if (line === "Travel") {
            console.log(`Ready for world tour! Planned stops: ${resultString}`);
            break;
        }

        let [command, ...tokens] = line.split(":");

        if (command === "Add Stop") {
            let index = +tokens[0];
            let stringToInsert = tokens[1];
            if (index >= 0 && index <= string.length) {
                let firstHalf = resultString.substring(0, index);
                let secondHalf = resultString.substring(index);
                resultString = firstHalf + stringToInsert + secondHalf;
            }
            console.log(resultString);
        }

        if (command === "Remove Stop") {
            let startIndex = +tokens[0];
            let endIndex = +tokens[1];
            let isValid = startIndex >= 0 && startIndex <= string.length && endIndex >= 0 && endIndex <= string.length;
            if (isValid) {
                let firstHalf = resultString.substring(0, startIndex);
                let secondHalf = resultString.substring(endIndex + 1);
                resultString = firstHalf + secondHalf;
            }
            console.log(resultString);
        }

        if (command === "Switch") {

            let oldString = tokens[0];
            let newString = tokens[1];

            if (string.includes(oldString) && oldString !== newString) {

                resultString = resultString.replace(oldString, newString)
            }
            console.log(resultString);
        }
    }

}


worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])

