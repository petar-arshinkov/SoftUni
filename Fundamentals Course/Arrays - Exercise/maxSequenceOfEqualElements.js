function maxSequenceOfEqualElements(arr) {
    let arrLength = arr.length;
    let sequence = 1;
    let currArr = [];
    let maxSequence = 1;
    let maxNumber = 0;

    for (let i = 0; i < arrLength; i++) {

        if (arr[i] === arr[i + 1]) {
            sequence++
        }
        else {
            sequence = 1;
        }

        if (sequence > maxSequence) {
            maxSequence = sequence;
            maxNumber = arr[i]
        }
    }

    for (let i = 1; i <= maxSequence; i++) {
        currArr.push(maxNumber);
    }

    console.log(currArr.join(" "));
}



maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);