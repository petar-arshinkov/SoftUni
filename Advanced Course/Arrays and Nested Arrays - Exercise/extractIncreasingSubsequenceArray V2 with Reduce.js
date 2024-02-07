function extractIncreasingSubsequenceArray(data) {

    let result = [];
    let biggest = data.shift();

    data.reduce((acc, el) => {
        if (el >= biggest) {
            biggest = el;
            acc.push(biggest);
        }
        return acc
    }, [])
}

console.log(extractIncreasingSubsequenceArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));