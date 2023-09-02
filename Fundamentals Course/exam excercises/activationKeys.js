function activationKeys(input) {
    let activationKey = input.shift();

    for (const line of input) {
        if (line === "Generate") {
            console.log(`Your activation key is: ${activationKey}`);
            break;
        }

        let [command, ...tokens] = line.split(">>>");

        switch (command) {
            case "Contains":
                let substring = tokens[0];
                if (activationKey.includes(substring)) {
                    console.log(`${activationKey} contains ${substring}`);
                }
                else {
                    console.log("Substring not found!");
                }
                break;
            case "Flip":
                let UpperOrLower = tokens[0];
                let startIndex = +tokens[1];
                let endIndex = +tokens[2];

                if (UpperOrLower === "Upper") {
                    let firstHalf = activationKey.substring(0, startIndex);
                    let secondHalf = activationKey.substring(endIndex, activationKey.length);
                    let stringToChange = activationKey.substring(startIndex, endIndex).toUpperCase();

                    activationKey = firstHalf + stringToChange + secondHalf;

                }
                else {
                    let firstHalf = activationKey.substring(0, startIndex);
                    let secondHalf = activationKey.substring(endIndex, activationKey.length);
                    let stringToChange = activationKey.substring(startIndex, endIndex).toLowerCase();

                    activationKey = firstHalf + stringToChange + secondHalf;
                }

                console.log(activationKey);
                break;

            case "Slice":
                let start = +tokens[0];
                let end = +tokens[1];

                let slicedKey = activationKey.slice(start, end);
                activationKey = activationKey.replace(slicedKey,"")
                console.log(activationKey);
                break;
            default:
                break;
        }

    }

}


activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
