function moving(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let freeSpace = length * width * height;
    let neededSpace = 0;
    let index = 3;
    while (freeSpace > neededSpace) {
        if (input[index] === "Done") {

            break;
        }
        freeSpace -= Number(input[index]);

        index++;
    }

    if(freeSpace<=neededSpace){
        console.log(`No more free space! You need ${neededSpace-freeSpace} Cubic meters more.`)
    }

    else{
        console.log(`${freeSpace} Cubic meters left.`)
    }


}

moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

