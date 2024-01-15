function specialNumbers(n) {


    for (let index = 1; index <= n; index++) {

        let digits = index.toString();
        let sum = 0;
        for (let i = 0; i < digits.length; i++) {
            sum += Number(digits[i])
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${index} -> True`);
        }
        else (
            console.log(`${index} -> False`)
        )
    }


}


specialNumbers(15)