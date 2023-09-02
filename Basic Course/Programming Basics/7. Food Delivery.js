function foodCost(input) {
    let chickenDish = Number(input[0]);
    let fishDish = Number(input[1]);
    let vegetarianDish = Number(input[2]);
    let sum = chickenDish * 10.35 + fishDish * 12.40 + vegetarianDish * 8.15 + 0.2 * (chickenDish * 10.35 + fishDish * 12.40 + vegetarianDish * 8.15) + 2.5
    console.log(sum);
};

foodCost(["2 ",

"4 ",

"3 "]);

foodCost(["9 ",

"2 ",

"6 "]);