function vowelsSum(input) {
    let string = input[0];
    let n = 0;

    for (let i = 0; i <= string.length; i++) {
        let letter = string[i];

        switch (letter) {
            case "a":
                n += 1;
                break;
            case "e":
                n += 2;
                break;

            case "i":
                n += 3;
                break;

            case "o":
                n += 4;
                break;

            case "u":
                n += 5;
                break;
        }
    }
    console.log(n);
}


vowelsSum(["hello"]);

vowelsSum(["hi"]);

vowelsSum(["bamboo"]);

vowelsSum(["beer"]);