function cookingByNumbers(numString, op1, op2, op3, op4, op5) {
    let num = Number(numString);
    let op = [op1, op2, op3, op4, op5]

    for (let i = 0; i < op.length; i++) {
        switch (op[i]) {
            case "chop":
                num /= 2;
                console.log(num);
                break;
            case "dice":
                num = Math.sqrt(num);
                console.log(num);
                break;
            case "spice":
                num += 1;
                console.log(num);
                break;

            case "bake":
                num *= 3;
                console.log(num);
                break;
            case "fillet":
                num *= 0.80;
                console.log(num.toFixed(2));
                break;
            default:
                break;
        }

    }
}



cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');