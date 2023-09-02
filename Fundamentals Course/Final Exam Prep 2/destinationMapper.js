function destinationMapper(str) {

    let regex = /([=\/])[A-Z][A-Za-z]{2,}\1/g
    let points = 0;
    let destinations = [];

    let foundDestinations = str.match(regex);

    if (foundDestinations) {
        foundDestinations.forEach((element) => {
            element = element.substring(1, element.length - 1);
            destinations.push(element);
            points += element.length;
        });
    }

    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${points}`);

}



destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");