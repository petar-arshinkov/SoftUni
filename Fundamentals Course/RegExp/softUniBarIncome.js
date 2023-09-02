function softUniBarIncome(input) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<quantity>\d+)[^|$%.]*\|(?<price>\d+.?\d*)\$/g

    let currentLine = input.shift();
    let total= 0;
    while (currentLine!=="end of shift") {
        let match = [...currentLine.matchAll(pattern)]

        currentLine=input.shift();    
    
        for (const el of match) {
            let prices = Number(el.groups.quantity) * Number(el.groups.price);
            total += prices;
            console.log(`${el.groups.name}: ${el.groups.product} - ${prices.toFixed(2)}`);
        }
    }

    console.log(`Total income: ${total.toFixed(2)}`);
}


softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);