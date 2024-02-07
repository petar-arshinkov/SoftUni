function negativePositive(arr) {

    let result = []
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < 0) {
            result.unshift(arr[index]);
        }
        else {
            result.push(arr[index])
        }

    }
    console.log(result.join("\n"));
}

negativePositive([7, -2, 8, 9])