function calculateMovieCosts(input){
let budget = Number(input[0]);
let extras = Number(input[1]);
let clothingPrice = Number(input[2]);
let decor = 0.1 * budget;
let discount = 0;

if(extras > 150){
    discount = (clothingPrice * extras)*0.1;
};

if (clothingPrice * extras - discount + decor > budget){
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${((clothingPrice * extras + decor - discount)- budget).toFixed(2)} leva more.`);    
}
else {
    console.log("Action!")
    console.log(`Wingard starts filming with ${(budget - clothingPrice * extras + discount - decor).toFixed(2)} leva left.`);
}
}

calculateMovieCosts(["20000",
"120",
"55.5"]);


calculateMovieCosts(["15437.62",
"186",
"57.99"]);

calculateMovieCosts(["9587.88",
"222",
"55.68"]);
