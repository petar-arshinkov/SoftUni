function modernTimes(input) {

    let inputArray = input.split(" ");

    for (const word of inputArray) {
        if (word[0] === "#" && word.length > 1) {
            let wordsArray = word.split("");
            wordsArray.shift();
            let wordToPrint = "";

            for (const char of wordsArray) {
                if (!isNaN(char)) {
                    wordToPrint = ""; 
                    break;
                } else {
                    wordToPrint += char;
                }
            }
            if (wordToPrint.length > 0) {
                console.log(wordToPrint);
            }
        }

    }

}


modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')