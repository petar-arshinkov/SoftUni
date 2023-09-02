function histogram(input){
let totalNums = Number(input[0]);
let number;
let numInFirstRange=0;
let numInSecondRange=0;
let numInThirdRange=0;
let numInFourthRange=0;
let numInFiftRange=0;


for(let i = 1; i<=totalNums;i++){
    number= Number(input[i]);

    if(number < 200){
        numInFirstRange++;
    }

    else if (number >= 200 && number <=399){
        numInSecondRange++
    }

    else if (number >= 400 && number <=599){
        numInThirdRange++
    }

    else if (number>= 600 && number <=799){
        numInFourthRange++
    }

    else {
        numInFiftRange++
    }
}
console.log(`${(numInFirstRange/totalNums*100).toFixed(2)}%`);
console.log(`${(numInSecondRange/totalNums*100).toFixed(2)}%`);
console.log(`${(numInThirdRange/totalNums*100).toFixed(2)}%`);
console.log(`${(numInFourthRange/totalNums*100).toFixed(2)}%`);
console.log(`${(numInFiftRange/totalNums*100).toFixed(2)}%`);
}

histogram(["3",
"1",
"2",
"999"])

histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])

histogram(["9",
"367", 
"99", 
"200", 
"799",
"999",
"333",
"555",
"111",
"9"])

histogram(["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"])
