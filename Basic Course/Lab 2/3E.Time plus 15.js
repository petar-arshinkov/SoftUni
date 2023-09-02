function tellTime(input){
let hour = Number(input[0]);
let minutes = Number(input[1]);
let minutesLater = minutes + 15;

if(minutesLater>59 && hour!==23){
    hour+=1
    minutesLater=minutesLater-60;
    if(minutesLater <10){
    console.log(`${hour}:0${minutesLater}`);
    }
    else {
        console.log(`${hour}:${minutesLater}`);
    }
}

else {
    if(minutesLater>59){
        hour = 0;
        minutesLater=minutesLater-60;
        if(minutesLater <10){
            console.log(`${hour}:0${minutesLater}`);
            }
            else {
                console.log(`${hour}:${minutesLater}`);
            }
    }
    else {
        console.log(`${hour}:${minutesLater}`);
    }
}
}


tellTime(["1", "46"]);
tellTime(["0", "01"]);
tellTime(["23", "59"]);
tellTime(["11", "08"]);
tellTime(["12", "49"]);
