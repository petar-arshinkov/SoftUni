function magicNumber(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            let prevNumber = Number(arr[i - 1]);
            for (let j = i; j < arr.length; j++) {
                let currentNumber = Number(arr[j]);
                let sum = currentNumber + prevNumber;

                if (sum === num) {
                    console.log(`${prevNumber} ${currentNumber}`);
                }
            }
        }
    }
}

magicNumber([1, 7, 6, 2, 19, 23], 8)