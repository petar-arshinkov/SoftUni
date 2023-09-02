function deckOfCards(array) {

    let listOfCards = array.shift().split(", ");
    let numberOfCommands = Number(array.shift());



    while (numberOfCommands>= 1) {
 
        let commandsArray = array.shift().split(", ");
        let command = commandsArray[0];
        let cardName = "";

        switch (command) {
            case "Add":
                cardName = commandsArray[1];
                if (listOfCards.includes(cardName)) {
                    console.log("Card is already in the deck");
                }
                else {
                    listOfCards.push(cardName);
                    console.log("Card successfully added");
                }
                break;
            case "Remove":
                cardName = commandsArray[1];
                if (listOfCards.includes(cardName)) {

                    let indexOfCard = listOfCards.indexOf(cardName);
                    listOfCards.splice(indexOfCard, 1);
                    console.log("Card successfully removed");
                }
                else {
                    console.log("Card not found");
                }

                break;

            case "Remove At":
                let removeIndex = commandsArray[1];
                if (removeIndex >= 0 && removeIndex <= listOfCards.length) {
                    listOfCards.splice(removeIndex, 1);
                    console.log("Card successfully removed");
                }
                else {
                    console.log("Index out of range");
                }
                break;

            case "Insert":
                let insertIndex = Number(commandsArray[1]);
                cardName = commandsArray[2];
                if(insertIndex <0 || insertIndex >listOfCards.length){
                    console.log("Index out of range");
                }
                else if(listOfCards.includes(cardName)){

                    console.log("Card is already added");
                }
                else{
                    listOfCards.splice(insertIndex,0,cardName);
                    console.log("Card successfully added");
                }

                break;
            default:
                break;
        }
        numberOfCommands--;
    }

console.log(listOfCards.join(", "));
}



deckOfCards(["Ace of Diamonds, Queen of Hearts, King of Clubs", "3", "Add, King of Diamonds", "Insert, 2, Jack of Spades", "Remove, Ace of Diamonds"]);