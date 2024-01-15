function rightPlace(stringToReplace, charToUse, stringToCompare){
let result = stringToReplace.replace("_", charToUse)
let output = result === stringToCompare? "Matched": "Not Matched";
console.log(output);
}


rightPlace('Str_ng', 'I',
'Strong');