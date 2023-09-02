function cardGame(input) {

    let peopleCards = {};
    let type = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    }

    let power  = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    }


    input.forEach(line => {
        let [personName, cards]  = line.split(": ");
        let cardArray = cards.split(", ");
        if(!peopleCards.hasOwnProperty(personName)){
            peopleCards[personName] = [];
        }

        cardArray.forEach(card => {


            if(!peopleCards[personName].includes(card)){
                peopleCards[personName].push(card);
            }

        });
    });

    for (const person in peopleCards) {
        let value = 0;
        for (const card of peopleCards[person]) {
            if(card.length ===2){
                let [powerCard, typeCard] = card.split("");
                value += type[typeCard] * power[powerCard]
            }
            else{
                let [powerCard, extra, typeCard] = card.split("");
                powerCard = powerCard + extra;
                value += type[typeCard] * power[powerCard]
            }
            
        }
        console.log(`${person}: ${value}`);
    }


}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
)