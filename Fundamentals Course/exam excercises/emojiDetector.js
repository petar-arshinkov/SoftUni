function emojiDetector(text) {
    text = text.shift();
    let regex = /((::)|(\*\*))(?<emoji>[A-Z][a-z]{2,})\1/g;
    let match = regex.exec(text);
    let emojis = {}
    let digitRegex = /[0-9]/g
    let matchDigits = text.match(digitRegex);
    let coolnessThreshold = 1;
    let count = 0;

    for (const digit of matchDigits) {
        coolnessThreshold *= +digit;

    }

    console.log(`Cool threshold: ${coolnessThreshold}`);

    while (match) {
        let emoji = match.groups.emoji;
        let coolness = 0;
        for (const char of emoji) {
            coolness += char.charCodeAt(0)
            emojis[match[0]] = coolness
        }
        count++;
        match = regex.exec(text);
    }

    console.log(`${count} emojis found in the text. The cool ones are:`);
    let coolEmojis = [];
    let allEmojiArray = Object.entries(emojis)

    for (const [key, value] of allEmojiArray) {
        if (value >= coolnessThreshold) {
            coolEmojis.push(key);
        }
    }

    console.log(coolEmojis.join("\n"));

}


emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])