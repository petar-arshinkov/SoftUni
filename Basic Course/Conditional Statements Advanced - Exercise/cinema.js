function cinema(input) {
    let type = input[0];
    let columns = Number(input[1]);
    let rows = Number(input[2]);

    switch (type) {
        case "Premiere":
            console.log(`${((rows * columns) * 12).toFixed(2)} leva`);
            break;
        case "Normal":
            console.log(`${((rows * columns) * 7.5).toFixed(2)} leva`);
            break;
        case "Discount":
            console.log(`${((rows * columns) * 5).toFixed(2)} leva`);
            break;
        default:
            console.log("error");
            break;
    }
}

cinema(["Discount", "12", "30"])