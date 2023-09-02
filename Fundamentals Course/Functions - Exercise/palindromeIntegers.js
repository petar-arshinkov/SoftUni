function palindromeIntegers(input) {


    for (let i = 0; i < input.length; i++) {
        let numberToString = input[i].toString();
        let numberReversed = []
        for (let j = numberToString.length-1; j >= 0; j--) {
            numberReversed.push(numberToString[j]);
        }
        numberReversed = numberReversed.join('');
        if(numberReversed === numberToString){
            console.log(true)
        }
        else{
            console.log(false)
        }
    }

}

palindromeIntegers([123, 323, 421, 121])