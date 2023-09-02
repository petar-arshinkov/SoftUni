function equalSums(arr) {
    let arrLength = arr.length;
    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;

    for (let i = 0; i < arrLength; i++) {

        if (i === 0) {
            leftSum = 0;
        }
        else if (i === arrLength - 1) {
            rightSum = 0;
        }

        for (let r = arrLength - 1; r > i; r--) {
            rightSum += Number(arr[r])
        }

        for (let l = i-1; l >= 0; l--) {
            leftSum += Number(arr[l])
        }

        if (leftSum === rightSum) {
            isEqual = true;
            console.log(i);
        }

        rightSum =0;
        leftSum= 0;

    }

    if(!isEqual){
        console.log("no");
    }

}

equalSums([1] );