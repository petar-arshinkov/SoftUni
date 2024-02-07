function sumFirstLast(arr){
    let result = Number(arr.shift()) + Number(arr.pop())
    console.log(result);
}
sumFirstLast(['20', '30', '40']);