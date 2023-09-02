function mergeArrays(firstArray, secondArray) {
    let thirdArray = [];
    let firstArrayLength = firstArray.length;

    for (let i = 0; i < firstArrayLength; i++) {
        if (i % 2 === 0) {
            thirdArray[i] = Number(firstArray[i]) + Number(secondArray[i]);
        }
        else {
            thirdArray[i]= firstArray[i] + secondArray[i];
        }
    }

    console.log(thirdArray.join(" - "));
}


mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)