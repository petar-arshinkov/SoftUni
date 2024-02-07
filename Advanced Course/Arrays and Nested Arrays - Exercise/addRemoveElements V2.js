function addRemoveElements(array) {
    let n = 1;
    let result = [];

    array.forEach(x => {
        x === "add" ? result.push(n): result.pop()
        n++
    });
    return result.length? result.join("\n"): "Empty";
}

console.log(addRemoveElements(['add', 'add', 'remove', 'add', 'add']));