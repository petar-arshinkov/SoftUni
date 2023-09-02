function destinationMapper(string) {

    let pattern = /([=\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let validDestinations = [];
    let totalPoints = 0;

    let match = pattern.exec(string);

    while (match) {
        let destination = match.groups.destination;
        totalPoints += destination.length;
        validDestinations.push(destination);

        match = pattern.exec(string);
    }

    console.log(`Destinations: ${validDestinations.join(", ")}`);
    console.log(`Travel Points: ${totalPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
