function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);
    let examTime = examHour * 60 + examMinutes;
    let arrivalTime = arrivalHour * 60 + arrivalMinutes;

    if (examTime - arrivalTime === 0) {

        console.log("On time");
    }

    else if (examTime - arrivalTime <= 30 && arrivalTime < examTime) {
        let minutesEarly = examTime - arrivalTime;
        console.log("On time");
        console.log(`${minutesEarly} minutes before the start`);



    }

    else if (arrivalTime > examTime) {
        let minutesLate = arrivalTime - examTime;
        let hoursLate = Math.trunc(minutesLate / 60);
        console.log("Late");
        if (hoursLate >= 1 && minutesLate % 60 > 10) {
            console.log(`${hoursLate}:${minutesLate%60} hours after the start`)
        }
        else if(hoursLate >=1){
            console.log(`${hoursLate}:0${minutesLate%60} hours after the start`)
        }
        else{
            console.log(`${minutesLate} minutes after the start`)
        }
    }
    else {
        let minutesEarly = examTime - arrivalTime;
        let hourEarly = Math.trunc(minutesEarly / 60)
        console.log("Early");
        if (minutesEarly < 60 && minutesEarly < 10) {
            console.log(`0${minutesEarly} minutes before the start`);
        }

        else if (minutesEarly < 60 && minutesEarly > 9) {
            console.log(`${minutesEarly} minutes before the start`);
        }

        else {
            if (minutesEarly % 60 < 10) {
                console.log(`${hourEarly}:0${(minutesEarly % 60)} hours before the start`);
            }
            else {
                console.log(`${hourEarly}:${(minutesEarly % 60)} hours before the start`);
            }
        }
    }

}

//onTimeForTheExam(["9", "30", "9", "50"])

//onTimeForTheExam(["9", "00", "8", "30"])

//onTimeForTheExam(["16", "00", "15", "00"])

onTimeForTheExam(["9", "00", "10", "30"])

//onTimeForTheExam(["14", "00", "13", "55"])

//onTimeForTheExam(["11", "30", "8", "12"])

//onTimeForTheExam(["10", "00", "10", "00"])

//onTimeForTheExam(["11", "30", "10", "55"])

//onTimeForTheExam(["11", "30", "12", "29"])
