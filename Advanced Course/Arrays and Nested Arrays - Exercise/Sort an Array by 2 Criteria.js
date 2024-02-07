function sortBy2Criteria(arr) {
    arr.sort((a, b) => {
        if (a.length - b.length === 0) {

            return a.toLowerCase().localeCompare(b.toLowerCase());

        } else {
            return a.length - b.length;
        }




    })

    console.log(arr.join("\n"));
}


sortBy2Criteria(["test", "Deny", "omen", "Default"])