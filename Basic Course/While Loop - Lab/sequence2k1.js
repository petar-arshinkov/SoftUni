function sequence2k1(input){
let n = Number(input[0]);
let n2 = 1
while(n2 <= n){
    console.log(n2)
    n2 = n2*2 +1;
}
}


sequence2k1(["3"]);
console.log("_________")
sequence2k1(["8"]);
console.log("_________")
sequence2k1(["17"]);
console.log("_________")
sequence2k1(["31"]);