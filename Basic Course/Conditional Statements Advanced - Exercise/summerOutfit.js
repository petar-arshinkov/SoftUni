function summerOutfit(input){
    let temperature = Number(input[0]);
    let time = input[1];
    let shoes;
    let outfit;

    switch(time){
        case "Morning":
            if(temperature >= 10 && temperature <= 18){
                shoes = "Sneakers";
                outfit = "Sweatshirt";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`)
            }

            else if(temperature > 18 && temperature <=24){
                shoes = "Moccasins";
                outfit = "Shirt";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`) 
            }

            else if (temperature >= 25){
                shoes = "Sandals";
                outfit = "T-Shirt";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`) 
            }

            break;
        case "Afternoon":
            if(temperature >= 10 && temperature <= 18){
                shoes = "Moccasins";
                outfit = "Shirt";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`)
            }

            else if(temperature > 18 && temperature <=24){
                shoes = "Sandals";
                outfit = "T-Shirt";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`) 
            }

            else if (temperature >= 25){
                shoes = "Barefoot";
                outfit = "Swim Suit";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`) 
            }
            break;
        case "Evening":
            if(temperature >= 10 && temperature <= 18){
                shoes = "Moccasins";
                outfit = "Shirt";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`)
            }

            else if(temperature > 18 && temperature <=24){
                shoes = "Moccasins";
                outfit = "Shirt";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`) 
            }

            else if (temperature >= 25){
                shoes = "Moccasins";
                outfit = "Shirt";
                console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`) 
            }
            break;
        default:
            console.log("error")
            break;
    }
}

summerOutfit(["16",

"Morning"])