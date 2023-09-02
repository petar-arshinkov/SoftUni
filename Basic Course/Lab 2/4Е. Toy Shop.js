function calculateToys(input){
let excursionPrice = Number(input[0]);
let puzzles = Number(input[1]);
let dolls = Number(input[2]);
let bears = Number(input[3]);
let minions = Number(input[4]);
let trucks = Number(input[5]);
let totalNumber = puzzles + dolls + bears + minions + trucks;
let totalSum = puzzles * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;
let discount = 0;

if(totalNumber >=50){
    discount = 0.25 * totalSum;
}

totalSum = totalSum - discount;
totalSum = totalSum - totalSum*0.1;

if(totalSum >= excursionPrice){
    console.log(`Yes! ${(totalSum - excursionPrice).toFixed(2)} lv left.`)
}

else {
    console.log(`Not enough money! ${(excursionPrice - totalSum).toFixed(2)} lv needed.`)
}

}


calculateToys(["40.8",
"20",
"25",
"30",
"50",
"10"]);

calculateToys(["320",
"8",
"2",
"5",
"5",
"1"]);
