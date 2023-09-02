function printAndSum(start, end) {
    let sum = 0;
    let list = "";

    for (let i = start; i <= end; i++) {
        sum += i;
        list = list + i + " ";
    }
    console.log(list);
    console.log(`Sum: ${sum}`);

}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);4