function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    if (operator === "+" || operator === "-" || operator === "*") {
        let result;
        let evenOdd = "odd";


        switch (operator) {
            case "+":
                result = n1 + n2;
                if (result % 2 === 0) {
                    evenOdd = "even";
                }
                console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`)
                break;
            case "-":
                result = n1 - n2;
                if (result % 2 === 0) {
                    evenOdd = "even";
                }
                console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`)
                break;
            case "*":
                result = n1 * n2;
                if (result % 2 === 0) {
                    evenOdd = "even";
                }
                console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`)
                break;
        }


    }
    else if (operator === "/") {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`)
        }
        else {
            result = n1 / n2;
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`)
        }
    }

    else if (operator === "%") {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`)
        }
        else {
            result = n1 % n2;
            console.log(`${n1} % ${n2} = ${n1 % n2}`)
        }
    }


}

operationsBetweenNumbers(["10",

    "12",

    "+"]);

operationsBetweenNumbers(["123", "12", "/"])

operationsBetweenNumbers(["112", "0", "/"])

operationsBetweenNumbers(["10", "1", "-"])

operationsBetweenNumbers(["10", "3", "%"])

operationsBetweenNumbers(["10", "0", "%"])

operationsBetweenNumbers(["7",

    "3",

    "*"])
