function cleverLily(input) {
    let age = Number(input[0]);
    let cost = Number(input[1]);
    let toyPrice = Number(input[2]);
    let toy = 0;
    let cash = 0;
    let incr= 0;

    for (let i = 1; i <= age; i++) {

    if (i % 2 === 0) {
            incr += 10;
            cash = cash + incr;
            cash = cash - 1;
        }

        else {
            toy++
        }


    }
    let sum = toy * toyPrice + cash;
    if (sum >= cost) {
        console.log(`Yes! ${(sum - cost).toFixed(2)}`);
    }

    else {
        console.log(`No! ${(cost - sum).toFixed(2)}`);
    }
}

cleverLily(["10",
    "170.00",
    "6"]);

cleverLily(["21",
    "1570.98",
    "3"]);