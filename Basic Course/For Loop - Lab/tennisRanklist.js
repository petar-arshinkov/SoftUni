function tennisRanklist (input){
    let numberOfTournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let tournamentResult;
    let points = 0;
    let wins = 0;

    for(let i = 2; i <= input.length; i++){
        tournamentResult = input[i];
        switch(tournamentResult){
            case "W":
            points += 2000;
            wins += 1;
            break;
            case "F":
            points += 1200;
            break;
            case "SF":
            points += 720;
        }
    }

    console.log(`Final points: ${points+startingPoints}`)
    console.log(`Average points: ${Math.floor(points/numberOfTournaments)}`)
    console.log(`${(wins/numberOfTournaments*100).toFixed(2)}%`)
}

tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])

tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])

tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])


