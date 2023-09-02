function vacationBooks(input){
    let numberOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let numberOfDays = Number(input[2]);
    let output = numberOfPages / pagesPerHour / numberOfDays;
    console.log(output);
};

vacationBooks(["432 ",

"15 ",

"4 "]);