function calculatePetCost (input){
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let sum =  dogFood * 2.5 + catFood * 4;
    console.log(`${sum} lv.`)
}

calculatePetCost(["5 ",

"4 "]);