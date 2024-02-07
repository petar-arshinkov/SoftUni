function pieceOfPie(arr,string1, string2){

    const start = arr.indexOf(string1);
    const end = arr.indexOf(string2);

    return arr.slice(start,end +1);
}

pieceOfPie(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie')