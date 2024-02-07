function extractIncreasingSubsequenceArray(data){

    let result= [];
    let biggest = data.shift();

    result.push(biggest);
    
    data.forEach(element => {
        if(biggest < element){
            biggest = element;
            result.push(element);
        }
    });

    return result;
}

console.log(extractIncreasingSubsequenceArray([1,3,8, 4, 10, 12, 3, 2, 24]));