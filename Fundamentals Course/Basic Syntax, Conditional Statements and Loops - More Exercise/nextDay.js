function nextDay(year, month, day) {
    let date = new Date(year, month-1, day);

    date.setDate(date.getDate() +1)

    let newDay = date.getDate();
    let newMonth = date.getMonth()+1;
    let newYear =date.getFullYear();

    return console.log(`${newYear}-${newMonth}-${newDay}`)
}


nextDay(2016, 9, 30);