function getArea(input){
let type = input[0];

if(type==="square"){
    let side = Number(input[1]);
    console.log((side*side).toFixed(3));
}
else if (type==="rectangle"){
    let length = Number(input[1]);
    let width = Number(input[2]);
    console.log((length*width).toFixed(3));
}
else if(type==="circle"){
    let radius = Number(input[1]);
    console.log((radius*radius*Math.PI).toFixed(3));
}

else {
    let base = Number(input[1]);
    let height = Number(input[2]);

    console.log(((base*height)/2).toFixed(3));
}

}

getArea(["square", "5"]);
getArea(["rectangle", "7", "2.5"]);
getArea(["circle", "6"]);
getArea(["triangle", "4.5", "20"]);
