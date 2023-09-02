function maxNumber(input){
let index = 0;
let number = 0;
let biggerNumber = Number(input[0]);

while(input[index]!=="Stop"){
    number = Number(input[index]);
    if(number > biggerNumber){
        biggerNumber = number;
    }
    index++;
}
console.log(biggerNumber);

}


maxNumber(["100",
"99",
"80",
"70",
"Stop"])


maxNumber(["-10",
"20",
"-30",
"Stop"])

maxNumber(["45",
"-20",
"7",
"99",
"Stop"])

maxNumber(["999",
"Stop"])

maxNumber(["-1",
"-2",
"Stop"])
