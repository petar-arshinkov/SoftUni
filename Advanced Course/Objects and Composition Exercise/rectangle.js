function rectangle(width, height, color){
    let fistLetter = color[0].toUpperCase();
    let replacedColor = fistLetter + color.substring(1)
    
let rectObj = {
    width,
    height,
    color: replacedColor,
    calcArea() {
        return this.width * this.height;
    }
}
return rectObj
}

let rect = rectangle(4,5,"red");

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());

