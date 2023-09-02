function solve(input) {

    let regex = /(#|\$|%|\*|&)(?<name>[A-Za-z]+)\1=(?<length>\d+)!!(?<encryptedCode>.+)/;
    
    let match;
    let newMessage = [];

    for (const line of input) {
        match = regex.exec(line);

        if (match) {
            let name = match.groups.name;
            let length = +match.groups.length;
            let encryptedCode = match.groups.encryptedCode;

            if (length === encryptedCode.length) {
                for (const char of encryptedCode) {
                    let charCode = char.charCodeAt(0);
                    let newCharCode = charCode+ length; 
                    newMessage.push(String.fromCharCode(newCharCode))
                }
                console.log(`Coordinates found! ${name} -> ${newMessage.join("")}`);
                break;
                
            }
            else {
                console.log("Nothing found!");

                
            }

        }
        else {
            console.log("Nothing found!");
        }


    }
}


solve(["Ian6Hutchinson=7!!\(58ycb4",
"#MikeHailwood#!!'gfzxgu6768=11",
"slop%16!!plkdek/.8x11ddkc",
"$Steve$=9Hhffjh",
"*DavMolyneux*=15!!efgk#'_$&UYV%h%",
"RichardQ^uayle=16!!fr5de5kd"])



