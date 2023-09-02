function fruitShop(input){
let fruit = input[0];
let day = input[1];
let qty = input[2];

//седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) 
//banana / apple / orange / grapefruit / kiwi / pineapple / grapes
switch(day){
    case "Monday":
    case "Tuesday":    
    case "Wednesday":
    case "Thursday":
    case "Friday":
        switch(fruit){
            case "banana":
                console.log((qty*2.5).toFixed(2));
                break;
            case "apple":
                console.log((qty*1.2).toFixed(2));
                break;
            case "orange":
                console.log((qty*0.85).toFixed(2));
                break;
            case "grapefruit":
                console.log((qty*1.45).toFixed(2));
                break;
            case "kiwi":
                console.log((qty*2.70).toFixed(2));
                break;
            case "pineapple":
                console.log((qty*5.50).toFixed(2));
                break;
            case "grapes":      
                console.log((qty*3.85).toFixed(2));
                break;      
            default:
                console.log("error");
                break;         
        }
    break;
    case "Saturday":
    case "Sunday":
        switch(fruit){
            case "banana":
                console.log((qty*2.7).toFixed(2));
                break;
            case "apple":
                console.log((qty*1.25).toFixed(2));
                break;
            case "orange":
                console.log((qty*0.90).toFixed(2));
                break;
            case "grapefruit":
                console.log((qty*1.60).toFixed(2));
                break;
            case "kiwi":
                console.log((qty*3).toFixed(2));
                break;
            case "pineapple":
                console.log((qty*5.60).toFixed(2));
                break;
            case "grapes":      
                console.log((qty*4.2).toFixed(2));
                break;    
            default:
                console.log("error");
                break;       
        }
    break;
    default:
        console.log("error");
}
}

fruitShop(["apple",
"Tuesday",
"2"]);

fruitShop(["orange",
"Sunday",
"3"])


fruitShop(["kiwi",
"Monday",
"2.5"])


fruitShop(["grapes",
"Saturday",
"0.5"])


fruitShop(["tomato",
"Monday",
"0.5"])

