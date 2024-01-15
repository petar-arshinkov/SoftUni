function daysInMonth(month, year) {
    month--;
    let date = new Date(year, month + 1, 0);
    console.log(date.getDate());
}


daysInMonth(1, 2012)