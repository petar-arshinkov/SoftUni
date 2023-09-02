function examPreparation(input) {
    let badGradesAllowed = Number(input[0]);
    let badGrades = 0;
    let grades = 0;
    let index = 1;
    let needBreak = false;
    let problemName;
    let problemCount = 0;

    while (input[index] != "Enough") {
        problemCount++
        problemName = input[index];

        if (input[index+1] <= 4) {
            badGrades++
        }
        if (badGrades >= badGradesAllowed) {
            needBreak = true;
            break;
        }
        index++
        grades += Number(input[index])
        index++
    }

    if (needBreak) {
        console.log(`You need a break, ${badGrades} poor grades.`)
    }
    else {
        console.log(`Average score: ${(grades / problemCount).toFixed(2)}`)
        console.log(`Number of problems: ${problemCount}`)
        console.log(`Last problem: ${problemName}`)
    }
}


examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])

examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])