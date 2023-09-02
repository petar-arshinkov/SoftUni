function calculateSwimming (input){
let record = Number(input[0]);
let distance = Number(input[1]);
let timeForMeter = Number(input[2]);
let delayTimes = Math.trunc(distance / 15);
let delaySeconds = delayTimes * 12.5;
let time = distance * timeForMeter + delaySeconds;

if(record <= time){
    console.log(`No, he failed! He was ${(time - record).toFixed(2)} seconds slower.`)
}

else {
    console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`)
}
};

calculateSwimming(["10464",
"1500",
"20"]);

calculateSwimming(["55555.67",
"3017",
"5.03"]);


