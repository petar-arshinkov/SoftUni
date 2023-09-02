function sumPrimeNonPrime(input){
    let primeSum = 0;
    let nonPrimeSum = 0;
    let startNum = Number(input[0]);
    let endNum = 2147483647;
    let stop = false;

    for(let i = 0; i<=endNum; i++){
        if(stop){
            break;
        }
        if(i<0){
            console.log("Number is negative.");
        }

        if(input[i]==="stop"){
            stop = true;
            break;
        }

        if()
    }

};


sumPrimeNonPrime(["3",

"9",

"0",

"7",

"19",

"4",

"stop"])