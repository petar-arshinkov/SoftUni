function calculateSumToCollect(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let detergent = Number(input[2]);
    let discount = Number(input[3]);

    let sum = pens * 5.8 + markers * 7.20 + detergent * 1.2 - ((pens * 5.8 + markers * 7.20 + detergent * 1.2)*(discount/100));
    console.log(sum);
}


calculateSumToCollect(["4 ",

"2 ",

"5 ",

"13 "]);