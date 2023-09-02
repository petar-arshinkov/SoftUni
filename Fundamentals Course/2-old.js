function second(input) {
    let stringsCount = Number(input.shift());
    let regex = /!(?<command>[A-Z][a-z]{2,})!:\[(?<string>[A-za-z]{8,})\]/g;




    for (let index = 0; index < stringsCount; index++) {
        let match = regex.exec(input.shift());
        if (match) {
            let command= match.groups.command;
            let string= match.groups.string;

            let stringArray = string.split("");
            let newString = [];
            for (let char of stringArray) {
                char = char.charCodeAt(0);
                newString.push(char);
            }
            

            console.log(`${command}: ${newString.join(" ")}`);
        }
        else {
            console.log("The message is invalid");
        }
        
    }


    
}



second((["2",

    "!Send!:[IvanisHere]",

    "*Time@:[Itis5amAlready"]))