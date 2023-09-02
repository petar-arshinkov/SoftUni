function calculateShopping (input){
let budget = Number(input[0]);
let videoCards = Number(input[1]);
let cpu = Number(input[2]);
let ram = Number(input[3]);
let discount = 0;
let videoCardsCost = videoCards * 250;
let cpuCosts = cpu * (0.35 * videoCardsCost);
let ramCosts = ram * (0.10 * videoCardsCost);
let sum = videoCardsCost + cpuCosts + ramCosts; 
if (videoCards > cpu){
    discount = 0.15 * sum;
    sum = sum - discount;
}

if(budget >= sum){
    console.log(`You have ${(budget-sum).toFixed(2)} leva left!`)
}
else {
    console.log(`Not enough money! You need ${(sum-budget).toFixed(2)} leva more!`)
}
}


calculateShopping(["900",
"2",
"1",
"3"]);


calculateShopping(["920.45",
"3",
"1",
"1"]);