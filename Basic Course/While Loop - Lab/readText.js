function readText(input) {
    let i = 0

    while (true) {
        let str = input[i];
        i++;

        if(str ==="Stop"){
            break;
        }
        console.log(str);
    }
}

readText(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])
