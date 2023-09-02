function oddAndEvenSum(number) {
    let numAsString = number.toString();
    let oddSum = 0;
    let evenSum = 0;
    let numberAsStringLength = numAsString.length;

    for (let i = 0; i < numberAsStringLength; i++) {
        let currentNumber = Number(numAsString[i]);

        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        }
        else {
            oddSum += currentNumber;
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;


}


console.log(oddAndEvenSum(1000435));
