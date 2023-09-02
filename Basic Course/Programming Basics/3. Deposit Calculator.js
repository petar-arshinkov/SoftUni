function depositCalculator(input){
let deposit = Number(input[0]);
let time = Number(input[1]);
let interest = Number(input[2]);
let sum = deposit + time * ((deposit * interest/100)/12);
console.log(sum);
};

depositCalculator(["2350",

"6 ",

"7 "]);