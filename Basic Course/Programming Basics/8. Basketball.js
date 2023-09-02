function calculateBasketballCosts (input){
    let fee = Number(input[0]);
    let shoes = fee - 0.4 * fee;
    let clothes = shoes - 0.2 * shoes;
    let ball = clothes / 4;
    let accesories = ball / 5;
    console.log(fee + shoes + clothes + ball + accesories);
};

calculateBasketballCosts(["550 "]);