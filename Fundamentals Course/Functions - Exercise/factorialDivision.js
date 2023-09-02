function factorialDivision(int1, int2) {

    function calculateFactorial(number) {
        if (number === 0) {
            return 1;
        }
        else {
            return number * calculateFactorial(number - 1)
        }
    }

    let firstNumFactorial = calculateFactorial(int1);
    let secondNumFactorial = calculateFactorial(int2);
    let result = firstNumFactorial/secondNumFactorial
    console.log(result.toFixed(2))
}

factorialDivision(5, 2)