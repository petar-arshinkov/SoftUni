function oscars(input) {
    let actorName = input[0];
    let points = Number(input[1]);
   
    let totalPoints = 0;
   
    for (let i = 3; i < input.length; i++) {
      let judgeName = input[i++];
      let pointsFromJudge = Number(input[i]);
      let judgeNameL = Number(judgeName.length);
      totalPoints = points + (judgeNameL * pointsFromJudge) / 2;
      points = totalPoints;
   
      if (totalPoints > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
        break;
      }
    }
   if (totalPoints < 1250.5) {
      console.log(
        `Sorry, ${actorName} you need ${(1250.5 - totalPoints).toFixed(1)} more!`
      );
    }
  }

oscars(["Zahari Baharov",

    "205",

    "4",

    "Johnny Depp",

    "45",

    "Will Smith",

    "29",

    "Jet Lee",

    "10",

    "Matthew Mcconaughey",

    "39"]);

oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);

