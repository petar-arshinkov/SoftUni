function passwordValidator(input) {
    let password = input.shift();

    for (let line of input) {
        if (line === "Complete") {
            break;
        }
        let [command, ...tokens] = line.split(" ");

        if (command === "Make" && tokens[0] === "Upper") {
            let index = Number(tokens[1]);

            let lettertoUpper = password.charAt(index).toUpperCase();
            let firstPart = password.substring(0, index);
            let secondPart = password.substring(index + 1);
            password = firstPart + lettertoUpper + secondPart;
            console.log(password);
        }
        else if (command === "Make" && tokens[0] === "Lower") {
            let index = Number(tokens[1]);

            let lettertoLower = password.charAt(index).toLowerCase();
            let firstPart = password.substring(0, index);
            let secondPart = password.substring(index + 1);
            password = firstPart + lettertoLower + secondPart;
            console.log(password);
        }
        else if (command === "Insert") {
            let index = Number(tokens[0])
            let charToInsert = tokens[1];
            if (index < 0 || index > password.length) {
                break;
            }

            let firstPart = password.substring(0, index);
            let secondPart = password.substring(index);
            password = firstPart + charToInsert + secondPart;
            console.log(password);
        }
        else if (command === "Replace") {
            let charToReplace = tokens[0];
            if (!password.includes(charToReplace)) {
                break;
            }

            let asciiValueOfChar = charToReplace.charCodeAt();
            let givenValue = Number(tokens[1]);
            let newSymbolAscii = Number(asciiValueOfChar) + Number(givenValue);
            let newSymbol = String.fromCharCode(newSymbolAscii);

            while (password.includes(charToReplace)) {
                password = password.replace(charToReplace, newSymbol)
            }

            console.log(password);
        }

        else if (command === "Validation") {
            let regexConsists = /^[a-zA-Z0-9_]+$/g;
            let regexUpper = /[A-Z]/g;
            let regexLower = /[a-z]/g;
            let regexDigits = /[0-9]/g;

            if (password.length < 8) {
                console.log("Password must be at least 8 characters long!");
            }

            if (!regexConsists.test(password)) {
                console.log("Password must consist only of letters, digits and _!");
            }

            if (!regexUpper.test(password)) {
                console.log("Password must consist at least one uppercase letter!");
            }

            if (!regexLower.test(password)) {
                console.log("Password must consist at least one lowercase letter!");
            }
            if (!regexDigits.test(password)) {
                console.log("Password must consist at least one digit!");
            }
        }

    }

}


// passwordValidator(['invalidpassword*',

//     'Add 2 p',

//     'Replace i -50',

//     'Replace * 10',

//     'Make Upper 2',

//     'Validation',

//     'Complete']);

console.log("-----------------------");

passwordValidator(['123456789',

    'Insert 3 R',

    'Replace 5 15',

    'Validation',

    'Make Lower 3',

    'Complete'])