function largestNumber(...params) {
let largest = Math.max(...params)
    console.log(`The largest number is ${largest}.`);
}


largestNumber(5, -3, 16);