function createProject (input){
    let architectName = input[0];
    let projectNumber = Number(input[1]);
    let hours = projectNumber * 3;

    console.log(`The architect ${architectName} will need ${hours} hours to complete ${projectNumber} project/s.`)
}

createProject(["George ",

"4 "]);