function numbersDivisibleBy9(input) {
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let sum = 0;

    for (let i = number1; i <= number2; i++) {
        if (i % 9 === 0) {
            sum = sum + i;
            
        }
    }
    console.log(`The sum: ${sum}`);
    for (let i = number1; i <= number2; i++) {
        if (i % 9 === 0) {
            console.log(i);
            
        }
    }



}


numbersDivisibleBy9(["100", "200"]);