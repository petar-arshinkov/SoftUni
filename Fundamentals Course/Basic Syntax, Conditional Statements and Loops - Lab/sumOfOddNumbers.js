function sumOfOddNumbers(n) {
    let sum = 0;
    let odd = 1;
    let count = 1;
    while (count <= n) {
        sum += odd;
        console.log(odd);
        odd += 2;
        count++;
    }


    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(3);