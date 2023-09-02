function wordsTracker(input) {
    let map = new Map();

    let wordsToTrack = input.shift().split(" ");


    for (const word of wordsToTrack) {
        map.set(word, 0);
    }

    for (const line of input) {
        for (const word of wordsToTrack) {
            let times = 0;
            if (line === word) {
                let current = map.get(line);
                map.set(line, current + 1)

            }
        }
    }

    let sorted = Array.from(map.entries())
        .sort((a, b) => b[1] - a[1]);

    sorted.forEach(element => {
        console.log(element.join(" - "));
    });



}


wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);