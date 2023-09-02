function bombNumbers(sequence, bombNumber) {
    let power = bombNumber[1];
    let sequenceLength = sequence.length;
    let sum = 0;

    for (let i = 0; i < sequenceLength; i++) {
        if (sequence[i] === bombNumber[0]) {
            let start = Math.max(0, i - power);
            let end = Math.min(i + power, sequence.length - 1);
            sequence.splice(start, end - start + 1);
            i = start - 1;
        }
    }



    for (let i = 0; i < sequence.length; i++) {
        sum += sequence[i];
    }
    console.log(sum)

}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])