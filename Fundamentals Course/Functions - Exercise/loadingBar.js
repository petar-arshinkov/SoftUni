function loadingBar(number) {
    let percentCounter = number / 10;
    let dotCounter = 10 - percentCounter;


    if(percentCounter === 10){
        console.log("100% Complete!");
    }
    else{
        console.log(`${number}% [${'%'.repeat(percentCounter)}${'.'.repeat(dotCounter)}]`);
        console.log(`Still loading...`);
    }
}


loadingBar(30)