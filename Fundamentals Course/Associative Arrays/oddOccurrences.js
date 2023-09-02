function oddOccurrences(input) {
    let inputArray = input.split(" ").map(e => e.toLowerCase());
    let wordsObject = {};

    for (const word of inputArray) {
        if (!wordsObject.hasOwnProperty(word)) {
            wordsObject[word] = 0;
        }
        wordsObject[word]++
    }

    let entries = Object.entries(wordsObject).filter(entry => entry[1] % 2 != 0).sort((a,b) => b[1]-a)
    let result = "";
    for (const entry of entries) {
        result += `${entry[0]} `
    }

    console.log(result);

}


oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')