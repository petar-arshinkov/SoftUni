function stringLength(a, b, c) {
    let aLength = a.length;
    let bLength = b.length;
    let cLength = c.length;
    let avgLenght = (aLength + bLength + cLength) / 3
    console.log(`${aLength + bLength + cLength}`);
    console.log(Math.floor(avgLenght));
}

stringLength('chocolate', 'ice cream', 'cake')