function lowerOrUpper(char) {
let caseResult = '';

    if (char === char.toUpperCase()) {
        caseResult ="upper-case";
    }
    else {
        caseResult ="lower-case";
    }

    console.log(caseResult);
}

lowerOrUpper(`L`);