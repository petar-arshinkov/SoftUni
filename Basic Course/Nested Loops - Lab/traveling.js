function traveling(input) {
    let destination = input[0];
    let budget = 0;
    let sum = 0;
    let index = 0;

    for (let i = 0; i <= input.length; i++) {
        destination = input[index++]
        if (destination === "End") {
            break;
        }

        budget = Number(input[index++]);
        sum = 0;

        for (let j = index; j <= input.length; j++) {
            sum += Number(input[j]);
            if (sum >= budget) {
                console.log(`Going to ${destination}!`);
                index = j+1;
                sum=0
                break;
            }
        }




    }
}


traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])

traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])
