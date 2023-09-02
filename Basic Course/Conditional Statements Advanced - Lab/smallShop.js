function smallShop(input){
let product = input[0];
let city = input[1];
let qty = Number(input[2]);

switch (city) {
    case "Sofia":
        switch(product){

            case "coffee":
                console.log(qty*0.5);

            break;

            case "water":
                console.log(qty*0.8);

            break;
                
            case "beer":
                console.log(qty*1.20);
            break;

            case "sweets":
                console.log(qty*1.45);
            break;

            case "peanuts":
                console.log(qty*1.6);
                break;
            
            default: 
                console.log("Error");
            break;
        }

    break;
    case "Plovdiv":
        switch(product){

            case "coffee":
                console.log(qty*0.4);
            break;
                
            case "water":
                console.log(qty*0.7);
            break;

            case "beer":
                console.log(qty*1.15);
            break;

            case "sweets":
                console.log(qty*1.30);
            break;

            case "peanuts":
                console.log(qty*1.5);

                break;
                default: 

            break;
        }

    break;
    case "Varna":
        switch(product){

            case "coffee":
                console.log(qty*0.45);
            break;

            case "water":
                console.log(qty*0.7);
            break;

            case "beer":
                console.log(qty*1.1);
            break;

            case "sweets":
                console.log(qty*1.35);
            break;

            case "peanuts":
                console.log(qty*1.55);

            break;

            default: 

            break;
        }

    break;

    default: 

    break;
}

}

smallShop(["coffee",
"Varna",
"2"]);

smallShop(["peanuts",
"Plovdiv",
"1"]);

smallShop(["beer",
"Sofia",
"6"]);

smallShop(["water",
"Plovdiv",
"3"]);

smallShop(["sweets",
"Sofia",
"2.23"]);