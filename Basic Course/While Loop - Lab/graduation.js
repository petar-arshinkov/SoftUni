function graduation(input) {
    let name = input[0];
    let grade;
    let index = 1;
    let excluded = 0;
    let gradeSum=0;

    while (index!==13) {
        grade = Number(input[index]);
        gradeSum +=grade

        if(excluded==2){
            console.log(`${name} has been excluded at ${index-excluded} grade`)
            break;
        }

        else if(grade <4) {
            excluded++
        }

        index++


    }

    if(excluded!==2){
        console.log(`${name} graduated. Average grade: ${(gradeSum/12).toFixed(2)}`)
    }
}


graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])

graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])
