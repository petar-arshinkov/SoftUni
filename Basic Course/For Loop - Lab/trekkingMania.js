function trekkingMania(input) {
    let groups = Number(input[0]);
    let peoplePerGroup = 0;
    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let total = 0;

    for (let i = 1; i <= groups; i++) {
        peoplePerGroup = Number(input[i]);
        total += peoplePerGroup;
        if (peoplePerGroup <= 5) {
            musala += peoplePerGroup;
        }
        else if (peoplePerGroup <= 12) {
            monblan += peoplePerGroup;
        }

        else if (peoplePerGroup <= 25){
            kilimanjaro += peoplePerGroup;
        }

        else if (peoplePerGroup <=40){
            k2 +=peoplePerGroup;
        }
        else if(peoplePerGroup >=41){
            everest+=peoplePerGroup;
        }
    }

    console.log(`${(musala/total *100).toFixed(2)}%`);
    console.log(`${(monblan/total *100).toFixed(2)}%`);
    console.log(`${(kilimanjaro/total *100).toFixed(2)}%`);
    console.log(`${(k2/total *100).toFixed(2)}%`);
    console.log(`${(everest/total *100).toFixed(2)}%`);
}

trekkingMania(["10",

    "10",

    "5",

    "1",

    "100",

    "12",
    "26", "17", "37", "40", "78"])
console.log("___________")
trekkingMania(["5",

    "25",

    "41",

    "31",

    "250",

    "6"])