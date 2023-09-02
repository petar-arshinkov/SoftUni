function distinctArray(numbers){
    let uniqueArray = [];

    for (const number of numbers) {
        if(!uniqueArray.includes(number)){
            uniqueArray.push(number);
        }
    }

    console.log(uniqueArray.join(' '));

}

distinctArray([7, 8, 9, 7, 2, 3,
    4, 1, 2])