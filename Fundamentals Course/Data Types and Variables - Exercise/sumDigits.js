function sumDigits(num) {
    let numToString = num.toString();
    let sum = 0;
    for(let i = 0; i < numToString.length; i++){
        let currentNumber = Number(numToString[i]);
        sum+=currentNumber;
    }
    console.log(sum);
}

sumDigits(97561);