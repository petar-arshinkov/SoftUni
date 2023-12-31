function adAstra(input){
    let text = input[0];
    let pattern = /([#]|[|])(?<item>[A-Za-z\s]+)\1(?<date>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<calories>\d{1,5})\1/g;
    let match = pattern.exec(text);

    let totalColories = 0;
    let buff = "";

    while (match) {
        let item = match.groups.item;
        let date = match.groups.date;
        let calories = Number(match.groups.calories);
        totalColories += calories;
        buff += `Item: ${item}, Best before: ${date}, Nutrition: ${calories}\n`
        match = pattern.exec(text);
    }

    let days = Math.floor(totalColories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    console.log(buff);
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500|| Not right|6.8.20|5|']
    );