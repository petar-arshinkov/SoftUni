function equalSumsEvenOddPosition(input) {
    let minNumber = Number(input[0]);
    let maxNumber = Number(input[1]);
    let result = "";

    for (let i = minNumber; i <= maxNumber; i++) {
        let currentNumber = i + "";
        let oddSum = 0;
        let evenSum = 0;

        for (let j = 0; j <= currentNumber.length; j++) {
            let currentDigit = Number(currentNumber.charAt(j));

            if (j % 2 === 0) {
                evenSum += currentDigit;
            }

            else {
                oddSum += currentDigit;
            }
        }
        if(evenSum === oddSum){
            result = result + " " + currentNumber;
        }
    }
    console.log(result);
}

equalSumsEvenOddPosition(["100115", "100120"])