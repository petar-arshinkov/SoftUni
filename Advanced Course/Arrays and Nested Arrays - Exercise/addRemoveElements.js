function addRemoveElements(array) {
    let n = 1;
    let result = [];

    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case "add":
                result.push(n)
                n++
                break;
            case "remove":
                result.pop();
                n++;
                break;
            default:
                break;
        }

    }
    return result.length? result.join("\n"): "Empty";
}

console.log(addRemoveElements(['add', 'add', 'remove', 'add', 'add']));