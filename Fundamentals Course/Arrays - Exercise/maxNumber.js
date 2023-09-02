function maxNumber(arr) {
    let arrLength = arr.length;

    let newArr = [];

    for (let i = 0; i < arrLength; i++) {
        let currentNumber = arr[i];
        let isTop = true;

        for (let j = i + 1; j < arrLength; j++) {
            let nextNumber = arr[j]
            if (nextNumber >= currentNumber) {
                isTop = false;
                break;
            }
        }
        if (isTop){
            newArr.push(currentNumber);
        }

    }

    console.log(newArr.join(" "));
}


maxNumber([14, 24, 3, 19, 15, 17])