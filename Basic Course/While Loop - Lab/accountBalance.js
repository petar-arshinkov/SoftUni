function accountBalance(input){
    let sum = 0;
    let i= 0;

    while(input[i]!=="NoMoreMoney"){
        if(Number(input[i])< 0){
            console.log("Invalid operation!");
            break;

        }
        console.log(`Increase: ${Number(input[i]).toFixed(2)}`);
        sum+=Number(input[i]);
        i++;
    }
    console.log(`Total: ${sum.toFixed(2)}`)
}

accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])
console.log("___________")
accountBalance(["120",
"45.55",
"-150","NoMoreMoney"])
