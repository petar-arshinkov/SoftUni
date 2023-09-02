function solve(input) {
    let email = input.shift();
    let encryptArray = [];

    for (const line of input) {

        let [command, ...tokens] = line.split(" ");

        switch (command) {
            case "Make":
                let upperOrLower = tokens[0];

                if (upperOrLower === "Upper") {
                    email = email.toUpperCase();
                    console.log(email);
                }
                else {
                    email = email.toLowerCase();
                    console.log(email);
                }
                break;
            case "GetDomain":
                let count = +tokens[0];
                let substring = email.substring(email.length - count,)
                console.log(substring);
                break;

            case "GetUsername":
                if (email.includes("@")) {
                    let index = email.indexOf("@");
                    let username = email.substring(0, index);
                    console.log(username);
                }
                else {
                    console.log(`The email ${email} doesn't contain the @ symbol.`);
                }
                break;

            case "Replace":
                let char = tokens[0];
                while(email.includes(char)){
                    email = email.replace(char,"-")
                }
                console.log(email);
                break;
            case "Encrypt":
                for (const char of email) {
                    let charCode = char.charCodeAt(0);
                    encryptArray.push(charCode);

                }
                console.log(encryptArray.join(" "));
            break;
            default:
                break;
        }
    }
}


solve(["Mike123@somemail.com",
    "Make Upper",
    "GetDomain 3",
    "GetUsername",
    "Encrypt",
    "Complete"])
