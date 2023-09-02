function sorting(data) {
let sortedArray = data.sort((a,b) => b-a);
let arrayLength = sortedArray.length;
let result = [];

for(let i = 0; i < arrayLength; i++){
    
    let bigNumber = sortedArray.shift();
    let smallNumber = sortedArray.pop();
    result.push(bigNumber);
    result.push(smallNumber);
}

console.log(result.join(' '))

}

sorting([1, 21, 3, 52, 69, 63, 31,
    2, 18, 94]
)