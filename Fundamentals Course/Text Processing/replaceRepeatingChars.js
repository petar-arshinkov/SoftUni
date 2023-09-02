function replaceRepeatingChars(text) {
    let output = text[0];

    for (let index = 1; index < text.length; index++) {
        let current = text[index];
        let prev = text[index - 1];

        if (current !== prev) {
            output += current;
        }

    }

    console.log(output);
}


replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')