function lastK(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let start = i - k;
        if (start < 0) {
            start = 0;
        }
        let sum = 0;

        for (let j = start; j < i; j++) {
            sum += result[j]

        }
        result.push(sum)

    }
    return result;
}


console.log(lastK(6, 3))