function skiTrip(input){
let stayDays = Number(input[0]);
let roomType = input[1];
let review = input[2];
let sum = 0;

switch(roomType){

    case "room for one person":
            sum = (stayDays-1)* 18;
            if(review==="positive"){
                sum = sum + (25/100 * sum);
            }
    
            else {
                sum = sum - (10/100 * sum);
            }
            console.log(sum.toFixed(2));
    break;
    case "apartment":
        sum = (stayDays-1)*25;
        if(stayDays < 10){
            sum = sum - (30/100 * sum);
        }
        else if( stayDays >=10 && stayDays <= 15){
            sum = sum - (35/100 * sum);
        }
        else {
            sum = sum - (50/100 * sum);
        }

        if(review==="positive"){
            sum = sum + (25/100 * sum);
        }

        else {
            sum = sum - (10/100 * sum);
        }
        console.log(sum.toFixed(2));

    break;

    case "president apartment":

    sum = (stayDays-1)*35;
    if(stayDays < 10){
        sum = sum - (10/100 * sum);
    }
    else if( stayDays >=10 && stayDays <= 15){
        sum = sum - (15/100 * sum);
    }
    else {
        sum = sum - (20/100 * sum);
    }

    if(review==="positive"){
        sum = sum + (25/100 * sum);
    }

    else {
        sum = sum - (10/100 * sum);
    }
    console.log(sum.toFixed(2));

    break;
}

}

skiTrip(["14",

"apartment",

"positive"])

skiTrip(["30",

"president apartment",

"negative"])