function sortArray(arr, op) {
    return op === "asc" ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a)
}

//

function sortArrayWithObj(arr, op) {
    const sortArr = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    }
    return arr.sort(sortArr[op])
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));

console.log(sortArrayWithObj([14, 7, 17, 6, 8], 'dcs'));