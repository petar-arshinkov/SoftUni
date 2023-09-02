function excursion(input) {
    let peopleInGroup = Number(input[0]);
    let nights = Number(input[1]);
    let cards = Number(input[2]);
    let tickets = Number(input[3]);



    let nightsCost = nights * 20;
    let cardsCost = cards * 1.60;
    let ticketsCost = tickets * 6;
    let costPerPerson = nightsCost + cardsCost + ticketsCost;
    let totalCost = costPerPerson * peopleInGroup;
    let finalCost = totalCost + (0.25*totalCost);

    console.log(finalCost.toFixed(2));

}


excursion(["20",
    "14",
    "30",
    "6"])

excursion(["131",
    "9",
    "33",
    "46"])
