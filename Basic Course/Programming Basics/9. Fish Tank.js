function calculateLitters (input){
    let depth = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentFilled = Number(input[3]);
    
    console.log((depth * width * height)/1000 * (1- percentFilled/100));
};

calculateLitters(["105 ",

"77 ",

"89 ",

"18.5 "]);