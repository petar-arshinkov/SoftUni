function imitationGame(input) {

    let message = input.shift();

    for (const line of input) {
        if (line === "Decode") {
            break;
        }

        let token = line.split("|");

        let action = token[0];

        switch (action) {
            case "Move":
                let n = Number(token[1]);
                for (let i = 0; i < n; i++) {
                    let firstLetter = message.substring(0, 1);
                    let restOfMessage = message.substring(1);
                    message = restOfMessage + firstLetter;
                }

                break;
            case "Insert":
                let index = Number(token[1]);
                let value = token[2];
                message = message.substring(0, index) + value + message.substring(index);
                break;
            case "ChangeAll":
                let substr = token[1];
                let replacement = token[2];

                while (message.includes(substr)) {
                    message = message.replace(substr, replacement);
                }
                break;
            default:
                break;
        }
    }

    console.log(`The decrypted message is: ${message}`);

}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]
);