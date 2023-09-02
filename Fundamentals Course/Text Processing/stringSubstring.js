function stringSubstring(word, text){

    word.toLowerCase();

    textArray = text.split(" ");
    let isFound = false;

    for (let wordInText of textArray) {
       let checkWord = wordInText.toLowerCase();
        if(checkWord === word){
            console.log(checkWord);
            isFound = true;
            break;
        }
    }
    
    if(!isFound){
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript',
'JavaScript is the best programming language');

stringSubstring('python',
'JavaScript is the best programming language')