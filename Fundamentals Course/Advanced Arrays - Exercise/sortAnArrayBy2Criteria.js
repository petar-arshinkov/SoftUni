function sortAnArrayBy2Criteria(data) {
    let sorted = data.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.localeCompare(b);
    });

    console.log(sorted.join('\n'));
}


sortAnArrayBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);