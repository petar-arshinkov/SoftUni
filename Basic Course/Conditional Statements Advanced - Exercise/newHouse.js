function newHouse(input) {
    let typeOfFlowers = input[0];
    let quantityOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let sum = 0;

    switch (typeOfFlowers) {
        case "Roses":
            if (quantityOfFlowers > 80) {
                sum = quantityOfFlowers * 5;
                sum = sum - (10 / 100 * sum);

            }
            else {
                sum = quantityOfFlowers * 5;
            }

            if (budget >= sum) {
                console.log(`Hey, you have a great garden with ${quantityOfFlowers} ${typeOfFlowers} and ${(budget - sum).toFixed(2)} leva left.`)
            }
            else {
                console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`)
            }
            break;
        case "Dahlias":
            if (quantityOfFlowers > 90) {
                sum = quantityOfFlowers * 3.8;
                sum = sum - (15 / 100 * sum);

            }
            else {
                sum = quantityOfFlowers * 3.8;
            }

            if (budget >= sum) {
                console.log(`Hey, you have a great garden with ${quantityOfFlowers} ${typeOfFlowers} and ${(budget - sum).toFixed(2)} leva left.`)
            }
            else {
                console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`)
            }
            break;
        case "Tulips":
            if (quantityOfFlowers > 80) {
                sum = quantityOfFlowers * 2.8;
                sum = sum - (15 / 100 * sum);

            }
            else {
                sum = quantityOfFlowers * 2.8;
            }

            if (budget >= sum) {
                console.log(`Hey, you have a great garden with ${quantityOfFlowers} ${typeOfFlowers} and ${(budget - sum).toFixed(2)} leva left.`)
            }
            else {
                console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`)
            }
            break;
        case "Narcissus":
            if (quantityOfFlowers < 120) {
                sum = quantityOfFlowers * 3;
                sum = sum + (15 / 100 * sum);

            }
            else {
                sum = quantityOfFlowers * 3;
            }

            if (budget >= sum) {
                console.log(`Hey, you have a great garden with ${quantityOfFlowers} ${typeOfFlowers} and ${(budget - sum).toFixed(2)} leva left.`)
            }
            else {
                console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`)
            }
            break;
        case "Gladiolus":
            if (quantityOfFlowers < 80) {
                sum = quantityOfFlowers * 2.5;
                sum = sum + (20 / 100 * sum);

            }
            else {
                sum = quantityOfFlowers * 2.5;
            }

            if (budget >= sum) {
                console.log(`Hey, you have a great garden with ${quantityOfFlowers} ${typeOfFlowers} and ${(budget - sum).toFixed(2)} leva left.`)
            }
            else {
                console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`)
            }
            break;
        default:
            console.log("error");
            break;
    }

}

newHouse(["Gladiolus", "119", "360"])