function addAndSubtract(input) {
    let oldSum = 0;
    let newSum = 0;
    let arrayLength = input.length;

    for (let i = 0; i < arrayLength; i++) {
        let currentNumber = Number(input[i]);
        oldSum += currentNumber;

        if (currentNumber % 2 === 0) {
            currentNumber += i;
        }
        else {
            currentNumber -= i;
        }

        newSum+=currentNumber;
        input[i]=currentNumber;

    }

    console.log(input);
    console.log(oldSum);
    console.log(newSum);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);