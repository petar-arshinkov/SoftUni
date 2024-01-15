function integerAndFloat(number1, number2, number3) {
    let sum = number1 + number2 + number3;

    if (sum === Math.floor(sum)) {
        console.log(`${sum} - Integer`);
    }
    else {
        console.log(`${sum} - Float`);
    }

}


integerAndFloat(9, 100, 1.1);