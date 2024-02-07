function magicMatrices(input) {
    // console.log(input);
    for (let i = 0; i < input.length - 1; i++) {
        let colOne = input.reduce((acc, value) => {
            acc += value[i];
            return acc;
        }, 0)

        let colTwo = input.reduce((acc, value) => {
            acc += value[i + 1];
            return acc;
        }, 0)

        let rowOne = input[i].reduce((acc, value) => {
            return acc + value;
        }, 0)

        let rowTwo = input[i + 1].reduce((acc, value) => {
            return acc + value;
        }, 0)
        // console.log(rowOne);
        // console.log(rowTwo);
        // console.log(colOne);
        // console.log(colTwo);
        if (rowOne !== rowTwo || colOne !== colTwo) {
            return false;
        }
    }

    return true;
}



console.log(magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));