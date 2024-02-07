function solution() {
    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let recipe = {

        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },

        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },

        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    return function (data) {
        let [action, type, qty] = data.split(" ");


        switch (action) {
            case "restock":
                return restock(type, qty)
                break;
            case "prepare":
                return prepare(type, qty)
                break;
            case "report":
                return report();
                break;
            default:
                break;
        }
    }

    function restock(type, qty) {
        store[type] += Number(qty);
        return "Success";
    }

    function prepare(type, qty) {
        let prepareRecipe = {};
        for (let [el, value] of Object.entries(recipe[type])) {
            let neededElementQty = value * qty;
            if (store[el] < neededElementQty) {
                return `Error: not enough ${el} in stock`
            }

            prepareRecipe[el] = neededElementQty;
        }

        for (let [el, value] of Object.entries(prepareRecipe)) {
            store[el] -= value;
        }

        return "Success"
    }

    function report(){

        return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`
    }
}


let manager = solution();

console.log(manager("prepare turkey 1")); // Success
console.log(manager("restock protein 10")); // Success
console.log(manager("prepare turkey 1")); // Success
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("prepare turkey 1")); // Success
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare turkey 1")); // Success
console.log(manager("restock flavour 10")); // Success
console.log(manager("prepare turkey 1")); // Success
console.log(manager("report")); // Success

