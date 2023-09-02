function coins(input) {
    let change = Number(input[0]);
    let coins = 0;

    while (change > 0) {
        while (change - 2 >= 0) {
            coins++
            change -= 2;
            change = Number(change.toFixed(2));
        }

        while (change - 1 >= 0) {
            coins++
            change -= 1;
            change = Number(change.toFixed(2));
        }

        while (change - 0.50 >= 0) {
            coins++
            change -= 0.50;
            change = Number(change.toFixed(2));
        }
        
        while (change - 0.20 >= 0) {
            coins++
            change -= 0.20;
            change = Number(change.toFixed(2));
        }
        
        while (change - 0.10 >= 0) {
            coins++
            change -= 0.10;
            change = Number(change.toFixed(2));
        }
        
        while (change - 0.05 >= 0) {
            coins++
            change -= 0.05;
            change = Number(change.toFixed(2));
        }

        
        while (change - 0.02 >= 0) {
            coins++
            change -= 0.02
            change = Number(change.toFixed(2));
        }

        while (change - 0.01 >= 0) {
            coins++
            change -= 0.01;
            change = Number(change.toFixed(2));
        }

    }
        console.log(coins);
}
    coins(["1.23"]);
    coins(["2"]);
    coins(["0.56"]);
    coins(["2.73"]);