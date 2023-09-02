function coffeeLover(array) {
    let startingList = array.shift().split(" ");
    let numberOfCommands = Number(array.shift());
    let newArray = [];

    while (numberOfCommands != 0) {
        let commandsArray = array.shift().split(" ");
        let command = commandsArray[0];

        switch (command) {
            case "Include":
                startingList.push(commandsArray[1])
                break;
            case "Remove":
                let toRemove = Number(commandsArray[2])
                if(toRemove >startingList.length){
                    break
                }
                else if (commandsArray[1] === "first") {

                    startingList.splice(0, toRemove);
                }
                else {

                    startingList.splice(-toRemove);
                }
                break;
            case "Prefer":
                let preferOne = Number(commandsArray[1]);
                let preferTwo = Number(commandsArray[2]);
                let temp = startingList[preferOne];

                if(preferOne >=0 && preferOne <= startingList.length && preferTwo >= 0 && preferTwo <= startingList.length){
                     startingList[preferOne] = startingList[preferTwo];
                     startingList[preferTwo] = temp;

                }
                break;

            case "Reverse":
                startingList.reverse()
                break;

            default:
                break;
        }



        numberOfCommands--
    }

    console.log(`Coffees:`);
    console.log(startingList.join(" "));

}


coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee", "5", "Include TurkishCoffee", "Remove first 2", "Remove last 1", "Prefer 3 1", "Reverse"])