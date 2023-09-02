function commonElements(firstArray, secondArray) {
    let firstArrayLength = firstArray.length;

    for (let i = 0; i < firstArrayLength; i++) {
        for (let j = 0; j < firstArrayLength; j++) {
            if (firstArray[i] === secondArray[j]) {
                console.log(firstArray[i]);
            }
        }
    }

}



commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])