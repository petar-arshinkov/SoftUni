function paintingCosts(input){
    let cover = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let workhours = Number(input[3]);

    let sum = ((cover + 2) * 1.5 + paint * 14.50 + thinner * 5 + 0.10 * paint * 14.50 + 0.4) + workhours * (0.3 * ((cover + 2) * 1.5 + paint * 14.50 + thinner * 5 + 0.10 * paint * 14.50 + 0.4)) 
    console.log(sum);
};

paintingCosts(["10 ",

"11 ",

"4 ",

"8 "]);

paintingCosts(["5 ",

"10 ",

"10 ",

"1 "]);