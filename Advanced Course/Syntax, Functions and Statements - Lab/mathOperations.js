function mathOperations(n1, n2, sign) {
 
    switch (sign) {
        case "+":
            console.log(n1 + n2);
            break;
        case "-":
            console.log(n1 - n2);
            break;
        case "*":
            console.log(n1 * n2);
            break;
        case "/":
            console.log(n1 / n2);
            break;
            case "%":
            console.log(n1 % n2);
            break;
            case "**":
            console.log(n1 ** n2);
            break;
        default:
            break;
    }
}


mathOperations(5, 6, '+');