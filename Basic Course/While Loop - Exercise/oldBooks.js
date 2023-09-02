function oldBooks(input){
    let book= input[0];
    let currentBook= input[1];
    let index = 1;

    while(currentBook!=book){
        if(currentBook==="No More Books"){
            console.log(`The book you search is not here!`);
            console.log(`You checked ${index-1} books.`)
            break;
        }
        index++;
        currentBook= input[index];
    }

    if(currentBook===book){
        console.log(`You checked ${index-1} books and found it.`);
    }
}


oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])

oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])


oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
