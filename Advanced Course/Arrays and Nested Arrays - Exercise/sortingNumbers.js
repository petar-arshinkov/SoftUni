function sortingNumbers(data) {
    data.sort((a, b) => a - b);
    let result = [];
    let i = 0;
    while (data.length > 0) {
        if (i % 2 === 0) {
            result.push(data.shift())
        }
        else {
            result.push(data.pop())
        }
        i++
    }
    return result
}


console.log(sortingNumbers([1, 65, 3]));