function squareOfStars(input=5){
let star = "*"
    for (let i = 0; i < input; i++) {
        let line = " ";
        for (let j = 0; j < input; j++) {
            line += star + " ";
        }
        
        console.log(line);
    }


}


squareOfStars(2);