function pascalCaseSplitter(text) {

    let words = [];
    let upperCaseIndex = 0;

    for (let i = 1; i < text.length; i++) {

        if(text.charCodeAt(i)>= 65 && text.charCodeAt(i) <=90){
            words.push(text.substring(upperCaseIndex, i));

            upperCaseIndex = i;
        }
        
    }
    words.push(text.substring(upperCaseIndex, text.length));

    console.log(words.join(", "));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');