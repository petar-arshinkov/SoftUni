function calculateLunchBreak(input){
let show = input[0];
let episodeDuration = Number(input[1]);
let breakDuration = Number(input[2]);
let lunchDuration = breakDuration/8;
let restDuration = breakDuration/4;
let timeForActivities = episodeDuration + lunchDuration + restDuration;

if(timeForActivities<=breakDuration){
    console.log(`You have enough time to watch ${show} and left with ${Math.ceil(breakDuration - timeForActivities)} minutes free time.`)
}
else {
    console.log(`You don't have enough time to watch ${show}, you need ${Math.ceil(timeForActivities - breakDuration)} more minutes.`)
}
}

calculateLunchBreak(["Game of Thrones",
"60",
"96"]);


calculateLunchBreak(["Teen Wolf",
"48",
"60"]);