function houseParty(data) {
    let guests = [];

    for (let i = 0; i < data.length; i++) {
        let current = data[i].split(' ');
        if (current[2] != "not") {
            if (!guests.includes(current[0])) {
                guests.push(current[0]);
            }
            else {
                console.log(`${current[0]} is already in the list!"`)
            }
        }
        else {
            if (guests.includes(current[0])){
                let getIndex = guests.indexOf(current[0]);
                guests.splice(getIndex,1);
            }
            else{
                console.log(`${current[0]} is not in the list!`);
            }
        }
    }

    console.log(guests.join("\n"));
}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)