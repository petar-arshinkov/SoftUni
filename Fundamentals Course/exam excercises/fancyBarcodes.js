function fancyBarcodes(input) {
    let numberOfBarcodes = +input.shift();
    let regex = /@(#)+(?<item>[A-Z][A-Za-z0-9]{4,}[A-Z])@(#)+/
    let digitRegex = /[0-9]/
    let match;

    for (let index = 0; index < numberOfBarcodes; index++) {
        let barcode = input[index];
         match = regex.exec(barcode);
         


        if (match) {
            let item = match.groups.item;
            let sumConcat = "";
            let productGroup = "00"
            for (const char of item) {

                let isNum = digitRegex.test(char);
                if (isNum) {
                    sumConcat += char;
                }

                if (sumConcat.length > 0) {
                    productGroup = sumConcat;
                }
            }
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log("Invalid barcode");

        }


    }

}
fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])

