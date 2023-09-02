function sumOfTwoNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinations = 0;
    let isFound = false;

    for (let i = n1; i <= n2; i++) {
        for (let j = n1; j <= n2; j++) {
            combinations++
            if(i+j===magicNumber){
                isFound = true;
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNumber})`);
                break;
            }

        }

        if(isFound){
            break;
        }
    }

    if(!isFound){
        console.log(`${combinations} combinations - neither equals ${magicNumber}`)
    }

}

sumOfTwoNumbers(["1",
    "10",
    "5"])

sumOfTwoNumbers(["23",
    "24",
    "20"])

sumOfTwoNumbers(["88",
    "888",
    "1000"])

sumOfTwoNumbers(["88",
    "888",
    "2000"])

