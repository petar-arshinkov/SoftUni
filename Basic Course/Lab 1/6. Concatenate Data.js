function ConcatenateData(input){
    let firstName = input[0];
    let lastName = input[1];
    let age = input[2];
    let town = input[3];

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`)
}

ConcatenateData(["Petar", "Arshinkov", 33, "Sofia"]);